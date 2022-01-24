const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const permission = message.member.permissions.has("KICK_MEMBERS");
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
      .kick(reason)
      .then(() => {
        const kickEmbed = new discord.MessageEmbed()
          .setColor("BLURPLE")
          .setTitle("Kicked a user")
          .setDescription(
            `User who kicked: <@${message.author.id}>\nUser who got kicked: <@${user.id}>\nReason for kick: **${reason}**`
          )
          .setTimestamp();

        message.reply({
          embeds: [kickEmbed],
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
  name: "kick",
  aliases: [],
};
