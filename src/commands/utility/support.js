const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const supportButton = new discord.MessageButton()
    .setLabel("Support Server")
    .setStyle("LINK")
    .setURL("https://discord.gg/sFUYkbh9jC");

  const supportRow = new discord.MessageActionRow().addComponents(
    supportButton
  );

  message.reply({
    content: "Click on the button below to join Chem Bot Support Server.",
    components: [supportRow],
  });
};

module.exports.config = {
  name: "support",
  aliases: ["chembotsupport"],
};
