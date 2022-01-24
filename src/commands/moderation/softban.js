const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const permission = message.member.permissions.has("BAN_MEMBERS");
  const target = message.mentions.users.first();
  const days = args[1];
  const reason =
    args.slice(2).join(" ") || `No reason provided by ${message.author.tag}`;

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
  } else if (!days) {
    const errEmbed3 = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        "Please specify the amount of days you want to ban that user."
      );

    message.reply({
      embeds: [errEmbed3],
    });
  } else {
    target
      .ban({
        reason: reason,
        days: days,
      })
      .then(() => {
        const softbanEmbed = new discord.MessageEmbed()
          .setColor("BLURPLE")
          .setTitle("Soft Banned a user")
          .setDescription(
            `User who banned: <@${message.author.id}>\nUser who got banned: <@${user.id}>\nBan for: **${days} day(s)\n**Reason for ban: **${reason}**`
          )
          .setTimestamp();

        message.reply({
          embeds: [softbanEmbed],
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
  name: "softban",
  aliases: [],
};
