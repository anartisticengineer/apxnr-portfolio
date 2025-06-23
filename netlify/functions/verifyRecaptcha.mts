const verifyRecaptcha = async (request: Request): Promise<Response> => {
  try {
    const { token } = await request.json();
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
    return new Response(JSON.stringify(await response.json()), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};

export default verifyRecaptcha;
