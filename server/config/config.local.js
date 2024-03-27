module.exports = () => {
  const config = (exports = {});

  config.logger = {
    consoleLevel: "DEBUG",
    allowDebugAtProd: true,
  };

  return {
    ...config,
  };
};
