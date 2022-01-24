const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const playperiodictableEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription(
      "Click on this video link and memorise the Periodic Table in a fun way\nVideo link - https://www.youtube.com/watch?v=rz4Dd1I_fX0"
    );

  message.reply({
    embeds: [playperiodictableEmbed],
  });
};

module.exports.config = {
  name: "playperiodictable",
  aliases: [],
};
