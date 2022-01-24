const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const permission = message.member.permissions.has("BAN_MEMBERS");
  const target = message.mentions.users.first();
  const reason =
    args.slice(1).join(" ") || `No reason provided by ${message.author.tag}`;

  if (!permission) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("You don't have the permissions to use this command.");

    message.reply({
      embeds: [errEmbed],
    });
  } else if (!target) {
    const errEmbed2 = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("This user doesn't exist in this server.");

    message.reply({
      embeds: [errEmbed2],
    });
  } else {
    target
      .ban({
        reason: reason,
      })
      .then(() => {
        const banEmbed = new discord.MessageEmbed()
          .setColor("BLURPLE")
          .setTitle("Banned a user")
          .setDescription(
            `User who banned: <@${message.author.id}>\nUser who got banned: <@${user.id}>\nReason for ban: **${reason}**`
          )
          .setTimestamp();

        message.reply({
          embeds: [banEmbed],
        });
      })
      .catch((err) => {
        console.log(err);
        message.reply({
          content: "An error occurred while running this command.",
        });
      });
  }
};

module.exports.config = {
  name: "ban",
  aliases: [],
};
