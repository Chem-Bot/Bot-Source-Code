const discord = require("discord.js");
const ultrax = require("ultrax");

module.exports.run = async (client, message, args) => {
  const query = args.join(" ");

  if (!query) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("Please enter the element name.");

    message.reply({
      embeds: [errEmbed],
    });
  } else {
    const content = new ultrax.Wikipedia({
      message: message,
      color: "BLURPLE",
      query: query,
    });

    content.fetch();
  }
};

module.exports.config = {
  name: "elementinfo",
  aliases: ["einfo"],
};
