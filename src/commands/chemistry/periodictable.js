const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const periodictableEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Click on the Image to make it Big")
    .setImage("https://i.ibb.co/n1bxd8t/Periodic-Table.jpg")
    .setTimestamp();

  message.reply({
    embeds: [periodictableEmbed],
  });
};

module.exports.config = {
  name: "periodictable",
  aliases: [],
};
