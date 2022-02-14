const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
	{
		username: "Gorogorgo-chan",
		email: "maddog@yakuza.com",
		password: "password",
	},
	{
		username: "JudgementKazzy",
		email: "Dragon@yakuza.com",
		password: "password",
	},
	{
		username: "DragonofDojima",
		email: "tojochairman@tojo.com",
		password: "password",
	},
	{
		username: "MadDogofShimano",
		email: "tojocaptain@tojo.com",
		password: "password",
	},
	{
		username: "MajimaConstruction",
		email: "majima@mconstruction.com",
		password: "password",
	},
	{
		username: "KiryuRealEstate",
		email: "kiryu@kiryuRE.com",
		password: "password",
	},
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
