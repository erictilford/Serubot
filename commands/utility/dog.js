const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Posts random dog image!'),
	async execute(interaction) {
		await interaction.reply('Blong!');
	},
};