const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const permission = message.member.permissions.has("MANAGE_MESSAGES");
  const amount = args[0];

  if (!permission) {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription("You don't have the permissions to use this command.");

    message.reply({
      embeds: [errEmbed],
    });
  }
  if (!amount) {
    const errEmbe2 = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setDescription(
        "Please enter the amount of messages you want to delete."
      );

    message.reply({
      embeds: [errEmbed2],
    });
  } else if (isNaN(amount)) {
    const errEmbed3 = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setDescription("Please enter a real number between 1 and 100.");

    message.reply({
      embeds: [errEmbed3],
    });
  } else if (amount > 100 || amount < 1) {
    const errEmbed4 = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setDescription("Please enter the amount between 1 and 100.");

    message.reply({
      embeds: [errEmbed4],
    });
  } else {
    await message.channel.messages
      .fetch({ limit: amount })
      .then((messages) => {
        message.channel.bulkDelete(messages);

        const clearEmbed = new discord.MessageEmbed()
          .setColor("BLURPLE")
          .setDescription(
            `<@${message.author.id}> has cleared **${amount}** messages in this channel.`
          );

        message.channel.send({
          embeds: [clearEmbed],
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
