import { HandlerEvent, HandlerResponse } from "@netlify/functions";

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;

const RESPONSE_HEADERS = {
  "Access-Control-Allow-Origin": "https://apxnr.netlify.app",
  "Access-Control-Allow-Headers": "Authorization",
  "Content-Type": "application/json",
};

exports.handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  try {
    const authHeader = event.headers.authorization || "";
    const authToken = authHeader.replace("Bearer ", "");
    //1
    if (!authToken) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Unauthorized" }),
        headers: RESPONSE_HEADERS,
      };
    }
    //2
    const userInfoRes = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!userInfoRes.ok) {
      throw new Error("Invalid Auth0 token");
    }
    //3
    const userInfo = await userInfoRes.json();

    const allowedEmails = ["justinanthonyjohnson1995@gmail.com"];
    if (!allowedEmails.includes(userInfo.email)) {
      return {
        statusCode: 403,
        body: JSON.stringify({ error: "Unauthorized user" }),
        headers: RESPONSE_HEADERS,
      };
    }
    //4
    const githubToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    if (!githubToken) {
      throw new Error("Github access token not configured");
    }
    //5
    return {
      statusCode: 200,
      body: JSON.stringify({ token: githubToken }),
      headers: RESPONSE_HEADERS,
    };
  } catch (err) {
    console.error("Auth error", err);
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Unauthorized" }),
      headers: RESPONSE_HEADERS,
    };
  }
};
