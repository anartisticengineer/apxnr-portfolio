//Utility functions for handling contact for data
import { load } from "recaptcha-v3";

const getRecaptchaToken = async (): Promise<Response> => {
  const recaptcha = await load(
    process.env.VUE_APP_RECAPTCHA_SITE_KEY as string,
    {
      autoHideBadge: true,
    }
  );
  const token = await recaptcha.execute("submit");
  return new Response(JSON.stringify({ token }), { status: 200 });
};

const verifyTokenFromServer = async (token: string): Promise<Response> => {
  const response = await fetch("/.netlify/functions/verifyRecaptcha", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ token }),
  });

  return response;
};

export { verifyTokenFromServer, getRecaptchaToken };
