const functions = require("../../functions")
const config = require("../../config.json")
module.exports = {
  name: "prefix",
  aliases: ["prefix"],
  category: "setup commands",
  description: "Let's you change the Prefix of the BOT",
  useage: "prefix <new Prefix>",
  run: async (client, message, args) => {
    //command
    let prefix = client.settings.get(message.guild.id, `prefix`);
    if (prefix === null) prefix = config.prefix;
    message.react("<a:CLEVER:828550389233090571>");
    if (!args[0]) return functions.embedbuilder(client, "null", message, "YELLOW", `Current prefix: \`${prefix}\``, `Please provide a new prefix`)
    if (!message.member.hasPermission("ADMINISTRATOR")) return functions.embedbuilder(client, "null", message, config.colors.no, "prefix", `<a:CLEVER:828550389233090571> You don\'t have permission for this Command!`)

    if (args[1]) return functions.embedbuilder(client, "null", message, config.colors.no, "prefix", `<a:CLEVER:828550389233090571> The prefix can\'t have two spaces`)
    if (args[0].length > 5) return functions.embedbuilder(client, "null", message, config.colors.no, "ERROR", `<a:CLEVER:828550389233090571> The prefix can\'t be Longer then "5"`)

    client.settings.set(message.guild.id, args[0], `prefix`);

    return functions.embedbuilder(client, "null", message, config.colors.yes, "prefix", `<a:CLEVE:828550389233090571> Successfully set new prefix to **\`${args[0]}\`**`)
  }
};