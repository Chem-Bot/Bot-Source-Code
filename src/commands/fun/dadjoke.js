const discord = require("discord.js");
const jokes = require("discord-jokes");

module.exports.run = async (client, message, args) => {
  jokes.getRandomDadJoke(function (dadjoke) {
    const dadJokeEmbed = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTitle("A new Dad Joke is here")
      .setDescription(`\`${dadjoke}\``)
      .setFooter({
        text: "How's the joke ?",
      })
      .setTimestamp();

    message.reply({
      embeds: [dadJokeEmbed],
    });
  });
};

module.exports.config = {
  name: "dadjoke",
  aliases: ["djoke"],
};
