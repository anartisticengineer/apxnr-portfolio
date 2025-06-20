import { Context } from "@netlify/functions";

const verifyRecaptcha = async (
  req: Request,
  context: Context
): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  try {
    const { token } = await req.json();
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
    return response.json();
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};

export default verifyRecaptcha;
