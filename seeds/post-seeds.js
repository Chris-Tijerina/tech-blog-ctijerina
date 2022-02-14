const { Post } = require("../models");

const postdata = [
	{
		title: "Majima Construction is recruiting!",
		post_text:
			"Now hiring buff dudes and tough guys! Work includes construction and occasional headbusting, but we pay pretty well. We welcome employees from all walks of life! No experience required.",
		user_id: 5,
	},
	{
		title: "UFO catchers are rigged!",
		post_text:
			"I went to the SEGA UFO Catcher game and spent 10,000 yen and no matter what I did, the Mega Drive Stuffed Toy was beyond my reach. I even asked the attendant to move the prizes around, and it didn't help. I think it's rigged.",
		user_id: 2,
	},
	{
		title: "No More Pay Phones!!!!",
		post_text:
			"There is a guy in Sotenbori that has this phone you carry around in a bag. It's awesome! ",
		user_id: 4,
	},
	{
		title: "I just bought SEGA High-Tech Land on Nakimichi St.",
		post_text:
			"The electronics district is now mine. All it took was beating some kid at Out Run.. weird?",
		user_id: 6,
	},
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
