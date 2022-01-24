const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";

  const mixtureEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Chemical Mixture(s)")
    .setDescription(
      "Mixture is a material made up of two or more different chemical substance/substances which are not chemically combined. A mixture is the physical combination of two or more substances in which the identities are retained and are mixed in the form of solutions, suspensions and colloids."
    )
    .setFooter({
      text: "Data from Wikipedia",
    })
    .setTimestamp();

  const mixtureButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://en.wikipedia.org/wiki/Mixture");

  const mixtureRow = new discord.MessageActionRow().addComponents(
    mixtureButton
  );

  message.reply({
    embeds: [mixtureEmbed],
    components: [mixtureRow],
  });
};

module.exports.config = {
  name: "mixture",
  aliases: ["mixtures", "chemicalmixture", "chemicalmixtures"],
};
