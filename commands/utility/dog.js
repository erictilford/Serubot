const { SlashCommandBuilder } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('WORK IN PROGRESS'),
	async execute(interaction) {
		const { body } = await request("https://dog.ceo/api/breeds/image/random");
		//await interaction.reply(body);
		await interaction.reply("BOW WOW");
	},
};