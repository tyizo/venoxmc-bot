module.exports = {
  name: "ping",
  run: async (client, message) => {
    const msg = await message.channel.send("Pinging...");
    const ping =
      "```js\nPing: " +
      Math.floor(msg.createdTimestamp - message.createdTimestamp) +
      " ms" +
      "\nAPI Ping : " +
      Math.round(client.ws.ping) +
      " ms" +
      "```";
    msg.edit(ping);
  },
};
