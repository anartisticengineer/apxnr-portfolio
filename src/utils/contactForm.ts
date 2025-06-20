//Utility functions for handling contact for data

const verifyTokenFromServer = async (token: string) => {
  const response = await fetch("/.netlify/functions/verifyRecaptcha", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ token }),
  });

  return response.json();
};

export { verifyTokenFromServer };
