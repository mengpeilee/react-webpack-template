const config = () => ({
    apiURL:
      process.env.NODE_ENV === 'development'
        ? `/api/v2`
        : `https://${SITE_URL}/${LANG_SELECTOR}/api/`,
  });
  export default config();
  