import React, { Component } form 'react';
import style from './style';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = { author: '', text: ''};
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this)
	}
}
