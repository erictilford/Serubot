const { SlashCommandBuilder } = require('discord.js');
const { MessageEmbed } = require('discord.js');
//const { request } = require('undici');
const { getDog } = require('../../controllers/dogs.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('WORK IN PROGRESS'),
	async execute(interaction) {
		const doggo = await getDog();
		// const { body } = await request("https://dog.ceo/api/breeds/image/random");
		// await interaction.reply("BOW WOW");
		interaction.reply(doggo);
	},
};