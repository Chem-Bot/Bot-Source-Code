const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const inviteButton = new discord.MessageButton()
    .setLabel("Invite Now")
    .setStyle("LINK")
    .setURL("https://cutt.ly/uUp0w2c");

  const inviteRow = new discord.MessageActionRow().addComponents(inviteButton);

  message.reply({
    content: "Click on the button below to Invite Chem Bot to your server.",
    components: [inviteRow],
  });
};

module.exports.config = {
  name: "invite",
  aliases: ["chembotinvite"],
};
