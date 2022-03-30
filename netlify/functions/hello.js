const DEPLOY_PRIME_URL = process.env.DEPLOY_PRIME_URL;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ context, primeUrl: DEPLOY_PRIME_URL }),
  };
};
