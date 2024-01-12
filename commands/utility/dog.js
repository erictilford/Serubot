const { SlashCommandBuilder } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('WORK IN PROGRESS'),
	async execute(interaction) {
		await interaction.reply('WOOF WOOF!');
	},
};