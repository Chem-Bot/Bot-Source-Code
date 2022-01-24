const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";
  const bondType = args[0];

  const covalentBondEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Covalent Bond")
    .setDescription(
      "Covalent Bond, in chemistry, the interatomic linkage that results from the sharing of an electron pair between two atoms. The binding arises from the electrostatic attraction of their nuclei for the same electrons. A covalent bond forms when the bonded atoms have a lower total energy than that of widely separated atoms."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const covalentBondButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://www.britannica.com/science/covalent-bond");

  const covalentBondRow = new discord.MessageActionRow().addComponents(
    covalentBondButton
  );

  const ionicBondEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Ionic Bond")
    .setDescription(
      "Ionic Bond, also called Electrovalent Bond, type of linkage formed from the electrostatic attraction between oppositely charged ions in a chemical compound. Such a bond forms when the valence (outermost) electrons of one atom are transferred permanently to another atom. The atom that loses the electrons becomes a positively charged ion (cation), while the one that gains them becomes a negatively charged ion (anion). A brief treatment of ionic bonds follows. For full treatment, see chemical bonding: The formation of ionic bonds."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const ionicBondButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://www.britannica.com/science/ionic-bond");

  const ionicBondRow = new discord.MessageActionRow().addComponents(
    ionicBondButton
  );

  const coordinateBondEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Coordinate Bond")
    .setDescription(
      "Coordinate Bond, also known as a Dative Bond or Dipolar Bond is a kind of two-center, two-electron covalent bond in which the two electrons derive from the same atom. The bonding of metal ions to ligands involves this kind of interaction."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const coordinateBondButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://en.wikipedia.org/wiki/Coordinate_covalent_bond");

  const coordinateBondRow = new discord.MessageActionRow().addComponents(
    coordinateBondButton
  );

  if (!bondType) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("Please enter the type of bond.");

    message.reply({
      embeds: [errEmbed],
    });
  } else if (bondType.toLowerCase() === "covalent") {
    message.reply({
      embeds: [covalentBondEmbed],
      components: [covalentBondRow],
    });
  } else if (bondType.toLowerCase() === "ionic") {
    message.reply({
      embeds: [ionicBondEmbed],
      components: [ionicBondRow],
    });
  } else if (bondType.toLowerCase() === "coordinate") {
    message.reply({
      embeds: [coordinateBondEmbed],
      components: [coordinateBondRow],
    });
  } else {
    const errEmbed2 = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        "This kind of bond doesn't exist.\nBonds which exist are - `covalent, ionic or coordinate`"
      );
  }
};

module.exports.config = {
  name: "bondinfo",
  aliases: ["bond"],
};
