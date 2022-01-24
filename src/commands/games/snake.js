const discord = require("discord.js");
const weky = require("weky");

module.exports.run = async (client, message, args) => {
  await weky.Snake({
    message: message,
    embed: {
      color: "BLURPLE",
      title: "Snake Game",
      description: `Nice ${message.author.username}, you played really well and you scored **{{score}}** points`,
      footer: "I love Snakes 🐍",
      timestamp: true,
    },
    emojis: {
      empty: "⬛",
      snakeBody: "🟩",
      food: "🔴",
      up: "⬆️",
      right: "⬅️",
      down: "⬇️",
      left: "➡️",
    },
    othersMessage: `Only <@${message.author.id}> can use these buttons`,
    buttonText: "Stop the game",
  });
};

module.exports.config = {
  name: "snake",
  aliases: [],
};
