const { MessageEmbed } = require("discord.js");
const moment = require("moment");
module.exports = {
  name: "user",
  run: async (client, message, args) => {
    const mentionMember =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;
    const embed = new MessageEmbed()
      .setTitle(mentionMember.user.tag)
      .setColor("RANDOM")
      .setThumbnail(mentionMember.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: "Account Created At: ",
          value: moment(mentionMember.user.createdAt).format(
            "D/M/YYYY h:mm a "
          ),
          inline: true,
        },
        {
          name: "Joined At: ",
          value: moment(mentionMember.guild.joinedAt).format(
            "D/M/YYYY h:mm a "
          ),
          inline: true,
        },
        {
          name: "User ID: ",
          value: mentionMember.user.id,
          inline: true,
        },
        {
          name: "Is it a bot?",
          value: mentionMember.user.bot,
          inline: true,
        },
        {
          name: "Avatar URL: ",
          value: `[Avatar Link](${mentionMember.user.displayAvatarURL({
            dynamic: true,
          })})`,
          inline: true,
        },
        {
          name: "Boosted Since:",
          value:
            moment(mentionMember.premiumSince).format("D/M/YYYY h:mm a ") ||
            "User dont have boost in this server",
          inline: true,
        },
        {
          name: "User Roles: ",
          value: mentionMember.roles.cache
            .map((role) => role.toString())
            .join(" ,"),
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
