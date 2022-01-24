const discord = require("discord.js");
const weky = require("weky");

module.exports.run = async (client, message, args) => {
  await weky.Calculator({
    message: message,
    embed: {
      color: "BLURPLE",
      title: "Calculator",
      footer: "I love Maths 💖",
      timestamp: true,
    },
    disabledQuery: "Calculator is now disbaled.",
    invalidQuery: "Your provided equation is invalid.",
    othersMessage: `Only <@${message.author.id}> can use these buttons.`,
  });

  message.reply({
    content:
      "Press the red **DC** button to disable the calculator after you finish using it.",
  });
};

module.exports.config = {
  name: "calculator",
  aliases: ["calci", "cal"],
};
