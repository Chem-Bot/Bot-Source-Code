const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";

  const elementEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Chemical Element(s)")
    .setDescription(
      "Chemical Elements, also called element, any substance that cannot be decomposed into simpler substances by ordinary chemical processes. Elements are the fundamental materials of which all matter is composed."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const elementButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://www.britannica.com/science/chemical-element");

  const elementRow = new discord.MessageActionRow().addComponents(
    elementButton
  );

  message.reply({
    embeds: [elementEmbed],
    components: [elementRow],
  });
};

module.exports.config = {
  name: "element",
  aliases: ["elements", "chemicalelement", "chemicalelements"],
};
