const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bling')
		.setDescription('Replies with Blong!'),
	async execute(interaction) {
		await interaction.reply('Blong!');
	},
};