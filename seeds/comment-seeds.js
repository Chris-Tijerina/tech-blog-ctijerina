const { Comment } = require("../models");

const commentdata = [
	{
		comment_text:
			"I'm not sure this is the right site for this kind of post... ",
		user_id: 2,
		post_id: 1,
	},
	{
		comment_text: "We DO use technology... I didn't think it would be so bad",
		user_id: 5,
		post_id: 1,
	},
	{
		comment_text: "Nevermind, I got it. Sorry about saying it's rigged.",
		user_id: 2,
		post_id: 2,
	},
	{
		comment_text: "Sounds good, but how does it get power?",
		user_id: 3,
		post_id: 3,
	},
	{
		comment_text: "It uses batteries.",
		user_id: 4,
		post_id: 3,
	},
	{
		comment_text: "That sounds expensive.",
		user_id: 3,
		post_id: 3,
	},
	{
		comment_text:
			"You beat a kid at some game? and got a building out of it? sounds fake.",
		user_id: 1,
		post_id: 4,
	},
	{
		comment_text:
			"It wasn't just some kid, he was rich and said he was the 'electronics king'.",
		user_id: 6,
		post_id: 4,
	},
	{
		comment_text: "Weird, at least he didn't try to take your pants.",
		user_id: 4,
		post_id: 4,
	},
	{
		comment_text: "What?",
		user_id: 2,
		post_id: 4,
	},
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
