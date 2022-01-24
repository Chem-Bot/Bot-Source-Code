const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");

  if (!query) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setDescription("Please enter a word or a sentence to shuffle it.");

    message.reply({
      embeds: [errEmbed],
    });
  } else {
    const url = `https://api.monkedev.com/fun/shuffle?content=${query}`;

    axios
      .get(url)
      .then((res) => {
        const shuffleEmbed = new discord.MessageEmbed()
          .setColor("BLURPLE")
          .setDescription(
            `Original Content: \`${query}\`\nShuffled Content: \`${res.data.result}\``
          )
          .setFooter({
            text: "I can shuffle your content anytime",
          })
          .setTimestamp();

        message.reply({
          embeds: [shuffleEmbed],
        });
      })
      .catch((err) => {
        console.log(err);
        message.reply({
          content: "Can't shuffle your content at the moment.",
        });
      });
  }
};

module.exports.config = {
  name: "shuffle",
  aliases: [],
};
