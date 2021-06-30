const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "lock",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

    const role = message.guild.roles.cache.find(
      (role) => role.name == "@everyone"
    );
    const mentionChannel = message.mentions.channels.first() || message.channel;
    const reason = args.slice(1).join(" ") || "With no reason";
    const embed = new MessageEmbed()
      .addFields(
        {
          name: "**Successfully locked: **",
          value: `**${mentionChannel} Channel**`,
        },
        {
          name: "**Resson**",
          value: `**${reason}**`,
        }
      )
      .setThumbnail(message.author.displayAvatarURL());
    mentionChannel
      .updateOverwrite(role, {
        SEND_MESSAGES: false,
      })
      .then(message.channel.send(embed))
      .catch((err) => {
        return message.channel.send("There was an error!");
      });
  },
};
