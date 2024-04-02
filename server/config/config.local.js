const CryptoJS = require("crypto-js");

module.exports = () => {
  const config = (exports = {});

  config.logger = {
    consoleLevel: "DEBUG",
    allowDebugAtProd: true,
  };

  exports.sequelize = {
    dialect: "mysql",
    database: "fumashop_dev",
    host: "mysql.sqlpub.com",
    port: 3306,
    username: "fumashop_dev",
    password: CryptoJS.AES.decrypt("U2FsdGVkX18I9aPWOa9I6OyFZx33f2weEZk9bhCBkkaJkiZLZCnm3ryzcM5R00kL", "").toString(CryptoJS.enc.Utf8),
  };

  return {
    ...config,
  };
};
