const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.reply({
    content: "Hello World :wave:",
  });
};

module.exports.config = {
  name: "test",
  aliases: ["t"],
};
