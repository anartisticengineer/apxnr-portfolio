/* eslint-disable no-undef */
window.addEventListener("load", () => {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/netlify-cms-lib-auth@2.4.2/dist/netlify-cms-lib-auth.js";
  script.onload = () => {
    window.CMS.registerBackend(
      "github",
      NetlifyCmsLibAuth.createAuthProvider({
        auth_url: `https://${AUTH0_DOMAIN}/authorize`,
        app_id: `${AUTH0_CLIENT_ID}`,
        auth_origin: "https://apxnr.netlify.app/admin/",
        auth_type: "pkce",
        scope: "openid profile email",
      })
    );
  };
  document.body.appendChild(script);
});
