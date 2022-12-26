module.exports = {
	name: 'interactionCreate',
	execute(interaction){
	
    //console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	
	    if(!interaction.isChatInputCommand()) return;
	    const command = interaction.client.commands.get(interaction.commandName);
	    if (!command) return;
	    try {
            const client = interaction.client
		    command.execute(interaction, client);
	    } catch (error) {
		    console.error(error);
		    interaction.reply({ content: 'Une erreur s\'est produite lors de l\'exécution de cette commande !', ephemeral: true });
	    }
    },
};