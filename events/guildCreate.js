const Discord = require("discord.js");

module.exports = guild => {
	guild.client.settings.set(guild.id, guild.client.defaultSettings);
	guild.client.log("Joined new guild: " + guild.name);
};