module.exports = {
  name: "say",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete();
    message.channel.send(args.join(" "));
  },
};
