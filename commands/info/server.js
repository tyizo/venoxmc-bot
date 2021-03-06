const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "server",
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setAuthor(message.guild.name)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("RANDOM")
      .addFields(
        {
          name: "Server ID: ",
          value: message.guild.id,
          inline: true,
        },
        {
          name: "Created At: ",
          value: message.guild.createdAt.toLocaleDateString("en-us"),
          inline: true,
        },
        {
          name: "Owned By: ",
          value: `<@${message.guild.ownerID}>`,
          inline: true,
        },
        {
          name: `Members (${message.guild.memberCount})`,
          value: `**${
            message.guild.members.cache.filter(
              (m) => m.user.presence.status == "online"
            ).size
          }** Online`,
          inline: true,
        },
        {
          name: "Region: ",
          value: message.guild.region,
          inline: true,
        },
        {
          name: "Verification Level: ",
          value: message.guild.verificationLevel,
          inline: true,
        },
        {
          name: "Total Boost: ",
          value: `${message.guild.premiumSubscriptionCount} Boost`,
          inline: true,
        },
        {
          name: "Boost Level: ",
          value: message.guild.premiumTier,
          inline: true,
        },
        {
          name: "Emojis: ",
          value:
            message.guild.emojis.cache.size >= 1
              ? `There are ${message.guild.emojis.cache.size} emojis!`
              : "There are no emojis :(",
          inline: true,
        }
      )
      .setFooter(
        `Requested by ${message.author.username}#${message.author.discriminator}`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    await message.channel.send(embed);
  },
};
