const config = {};

config.host = process.env.HOST || "https://virginia.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "70Dth6ia8l9E5ZCUqb08cQaLtEILb3Xf3u9z84E9Vq2OQtJU7ZYv1gA8Jys8IBbyeaarU1ls10NvoxrXoGc3Sg==";
config.databaseId = "Tasks";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;