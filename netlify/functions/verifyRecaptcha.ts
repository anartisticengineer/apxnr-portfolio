import { Context } from "@netlify/functions";

const verifyRecaptcha = async (
  req: Request,
  context: Context
): Promise<Response> => {
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
    console.error("ReCaptcha Token Verification Failed:", error);
    throw error;
  }
};

export default verifyRecaptcha;
