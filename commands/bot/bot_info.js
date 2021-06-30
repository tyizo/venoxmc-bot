const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "bot",
  description: "Get info about bot",
  timeout: 3000,
  run: async (client, message) => {
    const embed = new MessageEmbed()
      .setTitle("Bot info")
      .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        {
          name: "Total Guilds: ",
          value: `${client.guilds.cache.size} Guilds`,
          inline: true,
        },
        {
          name: "Total Users: ",
          value: `${client.users.cache.size} Users`,
          inline: true,
        },
        {
          name: "Total Channels: ",
          value: `${client.channels.cache.size} Channels`,
          inline: true,
        },
        {
          name: "Programming Langauge: ",
          value: "JavaScript & Node.JS",
          inline: true,
        }
      )
      .setFooter("Made By Tyizo#7315");
    await message.channel.send(embed);
  },
};
