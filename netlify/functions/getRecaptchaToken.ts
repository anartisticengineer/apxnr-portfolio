import { load } from "recaptcha-v3";

const getRecaptchaToken = async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }
  const recaptcha = await load(
    process.env.VUE_APP_RECAPTCHA_SITE_KEY as string,
    {
      autoHideBadge: true,
    }
  );
  const token = await recaptcha.execute("submit");
  return new Response(JSON.stringify({ token }), { status: 200 });
};

export default getRecaptchaToken;
