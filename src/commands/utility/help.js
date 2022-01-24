const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const botAV = "https://i.ibb.co/mcfpNkV/Logo-Design-1.jpg";
  const topic = args[0];

  const helpEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(botAV)
    .setTitle("Chem Bot Help Interface")
    .setDescription(
      "These are all the commands of Chem Bot. To get info on each command type `!website`"
    )
    .addField("Chemistry :test_tube:", "`!help chemistry`", true)
    .addField("Fun :rofl:", "`!help fun`", true)
    .addField("Games :game_die:", "`!help fun`", true)
    .addField("Math :bookmark_tabs:", "`!help math`", true)
    .addField("Moderation :closed_lock_with_key:", "`!help moderation`", true)
    .addField("Misc :tools:", "`!help misc`", true)
    .addField("Utility :gear:", "`!help utility`", true)
    .setFooter({
      text: "Use ! prefix before every command",
    })
    .setTimestamp();

  const chemistryEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Chemistry commands")
    .setDescription(
      "`chemistry`, `atom`, `molecule`, `ion`, `element`, `compound`, `mixture`, `bondinfo`, `elementinfo`, `periodictable`, `playperiodictable`"
    )
    .setFooter({
      text: "I love Chemistry 💖",
    })
    .setTimestamp();

  const funEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Fun commands")
    .setDescription(
      "`gif`, `meme`, `dadjoke`, `chucknorris`, `shuffle`, `reverse`"
    )
    .setFooter({
      text: "I love to have Fun 💖",
    })
    .setTimestamp();

  const gamesEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Games commands")
    .setDescription("`snake`, `fasttype`")
    .setFooter({
      text: "I love to play Games 💖",
    })
    .setTimestamp();

  const mathEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Math commands")
    .setDescription("`calculator`")
    .setFooter({
      text: "I love Maths 💖",
    })
    .setTimestamp();

  const moderationEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Moderation commands")
    .setDescription("`kick`, `ban`, `timeout`, `clear`")
    .setFooter({
      text: "I need Discipline in the server 😠",
    })
    .setTimestamp();

  const miscEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Misc commands")
    .setDescription("`suggestions`")
    .setFooter({
      text: "Suggest us so we could improve 😀",
    })
    .setTimestamp();

  const utilityEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Utility commands")
    .setDescription("`info`, `ping`, `invite`, `support`, `website`, `help`")
    .setFooter({
      text: "Some more helpful commands 😀",
    })
    .setTimestamp();

  if (!topic || topic === "modules") {
    message.reply({
      embeds: [helpEmbed],
    });
  } else if (topic.toLowerCase() === "chemistry") {
    message.reply({
      embeds: [chemistryEmbed],
    });
  } else if (topic.toLowerCase() === "fun") {
    message.reply({
      embeds: [funEmbed],
    });
  } else if (topic.toLowerCase() === "games") {
    message.reply({
      embeds: [gamesEmbed],
    });
  } else if (topic.toLowerCase() === "math") {
    message.reply({
      embeds: [mathEmbed],
    });
  } else if (topic.toLowerCase() === "moderation") {
    message.reply({
      embeds: [moderationEmbed],
    });
  } else if (topic.toLowerCase() === "misc") {
    message.reply({
      embeds: [miscEmbed],
    });
  } else if (topic.toLowerCase() === "utility") {
    message.reply({
      embeds: [utilityEmbed],
    });
  } else {
    const errEmbed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        "This help module doesn't exist.\nModules which exist are - `chemistry, fun, moderation, misc or utility`"
      );

    message.reply({
      embeds: [errEmbed],
    });
  }
};

module.exports.config = {
  name: "help",
  aliases: ["commands", "commandhelp"],
};
