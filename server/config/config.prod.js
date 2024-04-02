module.exports = () => {
  const config = (exports = {});

  // 免费数据库
  exports.sequelize = {
    dialect: "mysql",
    database: "fumashop",
    host: "mysql.sqlpub.com",
    port: 3306,
    username: "fumashop",
    password: CryptoJS.AES.decrypt("U2FsdGVkX1/qn3urqN2tP7mzdJgEYUFN2blUR/lrCNLT2u93yU7vzPRoCrUydQdA", "").toString(CryptoJS.enc.Utf8),
  };

  return {
    ...config,
  };
};
