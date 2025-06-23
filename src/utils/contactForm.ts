//Utility functions for handling contact for data
import { load } from "recaptcha-v3";

const getRecaptchaToken = async (): Promise<Response> => {
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
    return new Response(error.message, { status: 500 });
  }
};

const verifyTokenFromServer = async (token: string): Promise<Response> => {
  try {
    const response = await fetch("/.netlify/functions/verifyRecaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ token }),
    });
    return response;
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};

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

export { verifyTokenFromServer, getRecaptchaToken, FormRules };
