const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    const mentionMember =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!mentionMember)
      return message.channel.send("You need to mention a user!");
    if (mentionMember == message.author.id)
      return message.channel.send("You cant ban yourself!");
    if (mentionMember.id == client.user.id)
      return message.channel.send("You cant ban me!");
    try {
      let reason = args.slice(1).join(" ") || "There are no reason";
      const userembed = new MessageEmbed()
        .setTitle("You have been banned")
        .setDescription(
          `You have been banned in **${message.guild.name}** for **${reason}** by ${message.author.tag}`
        )
        .setFooter(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        );
      mentionMember.send(userembed);
      await mentionMember.ban({ reason: reason });
      message.channel.send({
        embed: {
          description: `Successfully ban ${mentionMember} with reason ${reason}`,
          thumbnail: message.author.displayAvatarURL({ dynamic: true }),
        },
      });
    } catch (e) {
      return message.channel.send("There was an error");
    }
  },
};
