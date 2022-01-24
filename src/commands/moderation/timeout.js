const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const permission = message.member.permissions.has("MANAGE_MESSAGES");
  const target = message.mentions.users.first();
  const minutes = args[1];
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
  } else if (!minutes) {
    const errEmbed3 = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("Please enter the timeout duration in minutes.");

    message.reply({
      embeds: [errEmbed3],
    });
  } else {
    target
      .timeout(minutes * 60 * 1000, reason)
      .then(() => {
        const timeoutEmbed = new discord.MessageEmbed()
          .setColor("BLURPLE")
          .setTitle("Timedout a user")
          .setDescription(
            `User who used timeout: <@${message.author.id}>\nUser who got timeout: <@${user.id}>\nReason for timeout: **${reason}**`
          )
          .setTimestamp();

        message.reply({
          embeds: [timeoutEmbed],
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
  name: "timeout",
  aliases: ["mute"],
};
