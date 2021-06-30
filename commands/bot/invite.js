const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  run: (client, message) => {
    const botID = "780455560645705740";
    const embed = new MessageEmbed()
      .setTitle(`${client.user.tag} Invite`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${botID}&permissions=8&scope=bot`
      )
      .setColor("RANDOM");
    message.channel.send(embed);
  },
};
