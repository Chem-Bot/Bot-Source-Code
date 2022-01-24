const config = require("../../../config.json");
const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");

  if (!query) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("Please enter a search query to find a GIF for you.");

    message.reply({
      embeds: [errEmbed],
    });
  } else {
    const url = `https://g.tenor.com/v1/search?q=${query}&key=${config.tenor_api_key}&limit=100`;

    axios
      .get(url)
      .then((res) => {
        const ranndom = Math.floor(Math.random() * res.data.results.length);
        message.reply({
          content: res.data.results[ranndom].url,
        });
      })
      .catch((err) => {
        console.log(err);
        message.reply({
          content: "GIF not available at the moment, please try later.",
        });
      });
  }
};

module.exports.config = {
  name: "gif",
  aliases: ["giphy"],
};
