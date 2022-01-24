const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const channel = "787392760101470208";
  const moderatorRole = message.guild.roles.cache.find(
    (role) => role.name === "Moderator"
  );
  const moderatorEmoji = "👍";

  const moderatorEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Take your Moderator role here")
    .setDescription(
      "React to the message to get the Moderator role and if you unreact then you can't test the bot commands!\n\n" +
        `${moderatorEmoji} <@&823423201328627713>`
    );

  const messageEmbed = await message.reply({
    embeds: [moderatorEmbed],
  });
  messageEmbed.react(moderatorEmoji);

  client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === channel) {
      if (reaction.emoji.name === moderatorEmoji) {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add(moderatorRole);
      }
    } else {
      return;
    }
  });

  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.channel.id === channel) {
      if (reaction.emoji.name === moderatorEmoji) {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove(moderatorRole);
      }
    } else {
      return;
    }
  });
};

module.exports.config = {
  name: "modrole",
  aliases: ["moderatorrole"],
};
