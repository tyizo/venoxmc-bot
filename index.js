const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
  disableEveryone: true,
});
const config = require("./config.json");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;
const http = require("http");
const express = require("express");
const app = express();
const moment = require("moment");

// keep the app alive. it's useful when you upload this to glitch.com host !
app.get("/", (request, response) => {
  console.log(
    `[${moment().format("DD-MM-YYYY HH:mm:ss")}]:` + " Ping Received!"
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
// handling the nodejs error.
if (process.version.slice(1).split(".")[0] < 8)
  throw new Error(
    "Node 8.0.0 or higher is required. Update Node on your system."
  );

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
