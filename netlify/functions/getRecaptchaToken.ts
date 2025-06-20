import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import { load } from "recaptcha-v3";

const getRecaptchaToken: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
  const recaptcha = await load(
    process.env.VUE_APP_RECAPTCHA_SITE_KEY as string,
    {
      autoHideBadge: true,
    }
  );
  const token = await recaptcha.execute("submit");
  return {
    statusCode: 200,
    body: JSON.stringify({ token }),
  };
};

export default getRecaptchaToken;
