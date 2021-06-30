module.exports = {
  name: "nick",
  category: "mods",
  description: "Change nickname for user",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_NICKNAMES")) return;

    const mention =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!mention)
      return message.channel.send("**⛔ You need to mention a user!**");
    try {
      const nickname = args.slice(1).join(" ");
      if (!nickname) mention.setNickname("");
      if (nickname) await mention.setNickname(nickname);
      return message.channel.send(
        `**Successfully changed nickname**\nNew Nickname: ${nickname} | For ${mention}`
      );
    } catch (e) {
      return message.channel.send("i cant change nickname for this member");
    }
  },
};
