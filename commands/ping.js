const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Commande de Ping'),
	async execute(interaction) {
		await interaction.reply('Pong !');
	},
};