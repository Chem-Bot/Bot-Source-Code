const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const url = "https://meme-api.herokuapp.com/gimme";

  axios
    .get(url)
    .then((res) => {
      const memeEmbed = new discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle(res.data.title)
        .setURL(res.data.postLink)
        .setImage(res.data.url)
        .setFooter({
          text: `Post by ${res.data.author} | Likes: 👍 ${res.data.ups}`,
        })
        .setTimestamp();

      const memeButton = new discord.MessageButton()
        .setLabel("Post Link")
        .setStyle("LINK")
        .setURL(res.data.postLink);

      const memeRow = new discord.MessageActionRow().addComponents(memeButton);

      message.reply({
        embeds: [memeEmbed],
        components: [memeRow],
      });
    })
    .catch((err) => {
      console.log(err);
      message.reply({
        content: "Meme not available at the moment.",
      });
    });
};

module.exports.config = {
  name: "meme",
  aliases: ["maymay"],
};
