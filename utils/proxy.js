let HttpsProxyAgent;

(async () => {
  ({ HttpsProxyAgent } = await import("https-proxy-agent"));
})();

function getAxiosConfig() {
  if (!process.env.ALL_PROXY_URL) {
    return {};
  }

  const agent = new HttpsProxyAgent(process.env.ALL_PROXY_URL);

  return {
    httpsAgent: agent,
    httpAgent: agent,
    proxy: false,
  };
}

function getFetchConfig() {
  if (!process.env.ALL_PROXY_URL) {
    return {};
  }
  return {
    agent: new HttpsProxyAgent(process.env.ALL_PROXY_URL),
  };
}

module.exports = { getAxiosConfig, getFetchConfig };