const discord = require("discord.js");
const weky = require("weky");

module.exports.run = async (client, message, args) => {
  const words = [
    "i love Chem Bot",
    "i love Discord",
    "microsoft is better than Apple",
    "is apple better that microsoft",
    "do you like ice creams",
    "do you like coding",
    "i love coding",
    "i love programming",
    "do you like waffles",
    "had your dinner",
  ];
  const word = words[Math.floor(Math.random() * words.length)];

  await weky.FastType({
    message: message,
    embed: {
      color: "BLURPLE",
      title: "Fast Type Game",
      description: `You have **{{time}}** to type the below sentence`,
      footer: "I love Typing ⌨️",
      timestamp: true,
    },
    sentence: word,
    winMessage: `Nice ${message.author.username}, you have a WPM of **{{wpm}}** and you made it in **{{time}}**`,
    loseMessage: "Better luck next time",
    cancelMessage: "You ended the game",
    time: 10000,
    buttonText: "Stop the game",
    othersMessage: `Only <@${message.author.id}> can use these buttons`,
  });
};

module.exports.config = {
  name: "fasttype",
  aliases: ["typetest"],
};
