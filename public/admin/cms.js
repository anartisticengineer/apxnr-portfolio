const authProvider = window.DecapCmsLibAuth.createAuthProvider({
  auth_url: `https://${process.env.AUTH0_DOMAIN}/authorize`,
  app_id: `${process.env.AUTH0_CLIENT_ID}`,
  auth_origin: "https://apxnr.netlify.app/admin/",
  auth_type: "pkce",
  scope: "openid profile email",
});

window.CMS.registerBackend("github", authProvider);
window.CMS.init();
