'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./model/comments');

let app = express();
let router = express.Router();

let port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://<id>:<pass>@ds133192.mlab.com:33192/react_comment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

	res.setHeader('Cache-Control', 'no-cache');
	next();
})


router.get('/', (req, res) => {
	res.json({ message: 'API Initialized!'});
});

router.route('/comments')
	.get((req, res) => {
		Comment.find((err, comments) => {
			if (err) res.send(err);
			res.json(comments)

		})
	})

	.post((req, res) => {
		let comment = new Comment();

		comment.author  = req.body.author;
		comment.text = req.body.text;

		comment.save((err) => {
			if (err) res.send(err);
			res.json({ message: 'Comment successfully added!' });
		})
	})

app.use('/api', router);

app.listen(port, function () {
	console.log('api running on port ' + port)
})










