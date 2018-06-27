const reqEvent = (event) => require("../events/" + event);

module.exports = client => {
	client.on("ready", () => reqEvent("ready")(client));
	client.on("reconnecting", () => reqEvent("reconnecting")(client));
	client.on("disconnect", () => reqEvent("disconnect")(client));
	client.on("message", reqEvent("message"));
	client.on("guildCreate", reqEvent("guildCreate"));
	client.on("guildDelete", reqEvent("guildDelete"));
	client.on("guildMemberAdd", reqEvent("guildMemberAdd"));
	client.on("guildMemberRemove", reqEvent("guildMemberRemove"));
	//client.on('guildMemberUpdate', reqEvent('guildMemberUpdate'));
	//client.on('guildBanAdd', reqEvent('guildBanAdd'));
	//client.on('guildBanRemove', reqEvent('guildBanRemove'));
	
	client.on("error", (e) => console.error(e));
	client.on("warn", (e) => console.warn(e));
	//client.on("debug", (e) => console.info(e));
};
