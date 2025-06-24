const getSiteKey = async (): Promise<Response> => {
  try {
    const siteKey = process.env.RECAPTCHA_SITE_KEY as string;
    return new Response(JSON.stringify({ siteKey }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};

export default getSiteKey;
