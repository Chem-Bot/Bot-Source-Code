const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";

  const atomEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Atom(s)")
    .setDescription(
      "Atom, smallest unit into which matter can be divided without the release of electrically charged particles. It also is the smallest unit of matter that has the characteristic properties of a chemical element. As such, the atom is the basic building block of chemistry."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const atomButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://www.britannica.com/science/atom");

  const atomRow = new discord.MessageActionRow().addComponents(atomButton);

  message.reply({
    embeds: [atomEmbed],
    components: [atomRow],
  });
};

module.exports.config = {
  name: "atom",
  aliases: ["atoms", "atominfo"],
};
