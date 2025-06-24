//Utility functions for handling contact for data
import { FormSubmission } from "@/types/contact";
import { load } from "recaptcha-v3";

//Utilities for getting and verifying recaptcha
class RecaptchaUtils {
  private getRecaptchaToken = async (): Promise<Response> => {
    try {
      //get site key
      const response = await fetch("/.netlify/functions/getSiteKey", {
        method: "POST",
      });
      const { siteKey } = await response.json();
      //load recaptcha
      const recaptcha = await load(siteKey, {
        autoHideBadge: true,
      });
      const token = await recaptcha.execute("submit");
      return new Response(JSON.stringify({ token }), { status: 200 });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  private verifyTokenFromServer = async (token: string): Promise<Response> => {
    try {
      const response = await fetch("/.netlify/functions/verifyRecaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      return response;
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  };

  public runTokenVerification = async (): Promise<Response> => {
    try {
      const tokenRequest = await this.getRecaptchaToken();
      const { token } = await tokenRequest.json();
      const recaptchaResponse = await this.verifyTokenFromServer(token);
      return recaptchaResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

class NetlifyFormSetup {
  private encode = (data: FormSubmission): string => {
    return Object.entries(data)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
  };

  public sendToNetlify = async (
    submission: FormSubmission
  ): Promise<Response> => {
    try {
      const formResponse = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: this.encode(submission),
      });
      return formResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

//Form verification rules
class FormRules {
  readonly forName: Array<(v: string) => string | boolean>;
  readonly forEmail: Array<(v: string) => string | boolean>;
  readonly forInquiryType: Array<(v: string) => string | boolean>;
  readonly forMessage: Array<(v: string) => string | boolean>;
  constructor() {
    this.forName = [(v: string) => !!v || "Name is required"];
    this.forEmail = [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ];
    this.forInquiryType = [(v: string) => !!v || "Inquiry type is required"];
    this.forMessage = [
      (v: string) => !!v || "Message is required",
      (v: string) =>
        v.length <= 500 || "Message must be less than 500 characters",
    ];
  }
}

export { FormRules, NetlifyFormSetup, RecaptchaUtils };
