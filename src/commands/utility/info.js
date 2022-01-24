const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";

  const infoEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Chem Bot Info")
    .setDescription("Here's some basic information about myself")
    .addField("My Prefix", "!")
    .addField("My Usertag", `${client.user.tag}`)
    .addField(
      "My Developer's Usertag",
      "<@787019465568419871>\n<@823429083110441030>"
    )
    .addField("Development Date", "13th December 2020")
    .setFooter({
      text: "Invite me to your server by typing !invite command",
    })
    .setTimestamp();

  const row = new discord.MessageActionRow().addComponents(
    new discord.MessageButton()
      .setLabel("Invite Now")
      .setStyle("LINK")
      .setURL("https://cutt.ly/uUp0w2c"),

    new discord.MessageButton()
      .setLabel("Support Server")
      .setStyle("LINK")
      .setURL("https://discord.gg/5YWYuqYxd5")
  );

  message.reply({
    embeds: [infoEmbed],
    components: [row],
  });
};

module.exports.config = {
  name: "info",
  aliases: ["chembotinfo", "botinfo"],
};
