'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentsSchema = new Schema({
	author: String,
	text: String
})

module.exports = mongoose.model('Comment', CommentsSchema);