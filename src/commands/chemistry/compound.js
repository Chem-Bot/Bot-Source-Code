const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";

  const compoundEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Chemical Compound(s)")
    .setDescription(
      "Chemical Compound, any substance composed of identical molecules consisting of atoms of two or more chemical elements. All the matter in the universe is composed of the atoms of more than 100 different chemical elements, which are found both in pure form and combined in chemical compounds."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const compoundButton = new discord.MessageButton()
    .setLabel("More Info")
    .setStyle("LINK")
    .setURL("https://www.britannica.com/science/chemical-compound");

  const compoundRow = new discord.MessageActionRow().addComponents(
    compoundButton
  );

  message.reply({
    embeds: [compoundEmbed],
    components: [compoundRow],
  });
};

module.exports.config = {
  name: "compound",
  aliases: ["compounds", "chemicalcompound", "chemicalcompounds"],
};
