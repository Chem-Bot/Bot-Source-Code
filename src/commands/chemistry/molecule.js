const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";

  const moleculeEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Molecule(s)")
    .setDescription(
      "Molecule, a group of two or more atoms that form the smallest identifiable unit into which a pure substance can be divided and still retain the composition and chemical properties of that substance."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const moleculeButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://www.britannica.com/science/molecule");

  const moleculeRow = new discord.MessageActionRow().addComponents(
    moleculeButton
  );

  message.reply({
    embeds: [moleculeEmbed],
    components: [moleculeRow],
  });
};

module.exports.config = {
  name: "molecule",
  aliases: ["molecules", "moleculeinfo"],
};
