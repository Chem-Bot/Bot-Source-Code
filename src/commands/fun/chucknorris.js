const discord = require("discord.js");
const jokes = require("discord-jokes");

module.exports.run = async (client, message, args) => {
  jokes.getRandomCNJoke(function (chucknorris) {
    const chucknorrisEmbed = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTitle("A new Chuck Norris Joke is here")
      .setDescription(`\`${chucknorris}\``)
      .setFooter({
        text: "How's the joke ?",
      })
      .setTimestamp();

    message.reply({
      embeds: [chucknorrisEmbed],
    });
  });
};

module.exports.config = {
  name: "chucknorris",
  aliases: ["chucknorrisjoke", "cnjoke"],
};
