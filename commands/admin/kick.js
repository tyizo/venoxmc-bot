const moment = require("moment");

module.exports = {
  name: "kick",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    const mentionMember =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!mentionMember)
      return message.channel.send("You need to mention a member!");
    if (mentionMember.id == message.author.id)
      return message.channel.send("You cant kick yourself!");
    if (mentionMember.id == client.user.id)
      return message.channel.send("You cant kick me");
    try {
      await mentionMember.kick();
      message.channel.send(
        `**Successfully kick ${mentionMember} \n Today at ${moment().format(
          "h:mm:a"
        )}**`
      );
    } catch (e) {
      return message.channel.send("There was an error");
    }
  },
};
