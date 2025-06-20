import { Handler, HandlerEvent } from "@netlify/functions";

const verifyRecaptcha: Handler = async (handlerEvent: HandlerEvent) => {
  if (handlerEvent.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
  try {
    const { token } = JSON.parse(handlerEvent.body ?? "{}");
    const secretKey = process.env.VUE_APP_RECAPTCHA_SECRET_KEY as string;
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(await response.json()),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};

export default verifyRecaptcha;
