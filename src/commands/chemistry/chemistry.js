const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";

  const chemistryEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Chemistry")
    .setDescription(
      "Chemistry, the science that deals with the properties, composition, and structure of substances, the transformations they undergo, and the energy that is released or absorbed during these processes."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const chemistryButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://www.britannica.com/science/chemistry");

  const chemistryRow = new discord.MessageActionRow().addComponents(
    chemistryButton
  );

  message.reply({
    embeds: [chemistryEmbed],
    components: [chemistryRow],
  });
};

module.exports.config = {
  name: "chemistry",
  aliases: ["chemistryinfo", "cheminfo"],
};
