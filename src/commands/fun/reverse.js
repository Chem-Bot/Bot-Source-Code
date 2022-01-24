const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");

  if (!query) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("Please enter a word or a sentence to reverse it.");

    message.reply({
      embeds: [errEmbed],
    });
  } else {
    const url = `https://api.monkedev.com/fun/reverse?content=${query}`;

    axios
      .get(url)
      .then((res) => {
        const reverseEmbed = new discord.MessageEmbed()
          .setColor("BLURPLE")
          .setDescription(
            `Original Content: \`${query}\`\nReversed Content: \`${res.data.result}\``
          )
          .setFooter({
            text: "I can reverse your content anytime",
          })
          .setTimestamp();

        message.reply({
          embeds: [reverseEmbed],
        });
      })
      .catch((err) => {
        console.log(err);
        message.reply({
          content: "Can't reverse your content at the moment.",
        });
      });
  }
};

module.exports.config = {
  name: "reverse",
  aliases: [],
};
