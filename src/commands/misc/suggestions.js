const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const channel = message.guild.channels.cache.find(
    (c) => c.name === "write-suggestions"
  );

  if (!channel) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        "Suggestions channel doesn't exist.\nCreate a channel named as `write-suggestions` for suggestions."
      );

    message.reply({
      embeds: [errEmbed],
    });
  } else {
    const suggestion = args.join(" ");

    if (!suggestion) {
      const errEmbed2 = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription("Please enter a suggestion.");

      message.reply({
        embeds: [errEmbed2],
      });
    } else {
      const suggestionsEmbed = new discord.MessageEmbed()
        .setColor("BLURPLE")
        .setAuthor({
          name: `Suggested by ${message.author.tag}`,
          iconURL: message.author.displayAvatarURL({ dynamic: true }),
        })
        .setDescription(suggestion);

      channel
        .send({
          embeds: [suggestionsEmbed],
        })
        .then((msg) => {
          msg.react("✅");
          msg.react("❌");
          message.delete();
        });
    }
  }
};

module.exports.config = {
  name: "suggestions",
  aliases: ["suggest"],
};
