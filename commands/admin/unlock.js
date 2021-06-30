module.exports = {
  name: "unlock",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

    const role = message.guild.roles.cache.find(
      (role) => role.name == "@everyone"
    );
    const mentionChannel = message.mentions.channels.first() || message.channel;

    mentionChannel
      .updateOverwrite(role, {
        SEND_MESSAGES: null,
      })
      .then(message.channel.send(`Successfully unlocked ${mentionChannel}`))
      .catch((err) => {
        message.channel.send("There was an error!");
        console.log(err);
      });
  },
};
