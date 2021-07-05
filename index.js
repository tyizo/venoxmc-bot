require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;
const app = express();
const moment = require("moment");
["handlers", "events"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});
// Anti share
client.on("message", (message) => {
  let arabic_blacklist = config.ARABIC_WORDS;
  let foundInText = false;
  for (const i in arabic_blacklist) {
    if (
      message.content.toLowerCase().includes(arabic_blacklist[i].toLowerCase())
    )
      foundInText = true;
  }
  if (foundInText) {
    message.delete();
  }

  let blacklisted = config.ENGLISH_WORDS;
  let found = false;
  for (const i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase()))
      found = true;
  }
  if (found) {
    message.delete();
  }
});

client.login(process.env.TOKEN);
