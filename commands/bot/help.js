const { MessageEmbed } = require("discord.js");
const moment = require("moment");
module.exports = {
  name: "help",
  catogory: "bot",
  description: "Get help about this bot",
  run: async (client, message) => {
    const embed = new MessageEmbed()
      .setTitle("**:star_struck: Welcome to VenoxMC Bot .. **")
      .setColor("RANDOM")
      .setFooter(`Made by Tyizo#7315 | Today ${moment().format("h:mm a")}`)
      .setDescription("**:bulb: Available Commands**")
      .addFields(
        {
          name: "**:shield: Admins:**",
          value:
            "`kick, ban, unban, unkick, lock, unlock, addrole, clear, removerole.`",
        },
        {
          name: "**:joy: Fun:**",
          value: "`hug, joke, meme`",
        },
        {
          name: "**:scroll: Info:**",
          value: "`server, botinfo, ping, user, invite, avatar.`",
        }
      )
      .setThumbnail(message.guild.iconURL({ dynamic: true }));
    message.react("🚀");
    await message.channel.send(embed);
  },
};
