module.exports = function(inquirer, currentEnv) {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "CHAT_API_DB_URI",
        message: "Database connection uri",
        default: currentEnv.CHAT_API_DB_URI || `sqlite:${__dirname}/database.db`
      }
    ])
    .then(function(options) {
      return {
        CHAT_API_DB_URI: options.CHAT_API_DB_URI
      };
    });
};
