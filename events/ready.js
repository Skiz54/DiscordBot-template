const moment = require("moment");
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
	
        console.log(`[${moment(Date.now()).format('DD/MM/YY HH:mm:ss')}] ${client.user.tag} est online !`);

        // ACTIVITY BOT
	    var games = [
		    {
		    	name: `${client.user.username}`,
		    	type: ActivityType.Listening,
				status: "online"
		    },
			{
				name: `{servs} Serveurs`,
				type: ActivityType.Watching,
				status: "online"
			},
			{
				name: `{users} Utilisateurs`,
				type: ActivityType.Watching,
				status: "online"
			},
		    {
		      name: `/help `,
		      type: ActivityType.Listening,
			  status: "online"
		    },
	    ];

	    var i = 0;
	    setInterval(function () {
	    
			client.user.setPresence({
				activities: [{ name: `${games[parseInt(i, 10)].name.replace("{servs}", client.guilds.cache.size).replace("{users}", client.users.cache.size)}`, type: games[parseInt(i, 10)].type }],
				status: games[parseInt(i, 10)].status,
			});

		if (games[parseInt(i + 1)]) {
			i++;
		} else {
			i = 0;
		}

	  	}, 10000);
	},
};