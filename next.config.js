const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {}
    : require("next-server/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  const withSass = require("@zeit/next-sass");

  return {
    ...defaultConfig,
    target: "serverless",
    ...withSass()
  };
};
