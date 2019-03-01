import React from 'react';
import PropTypes from 'prop-types';

const MyNotes = (props) => {
	return (
		<div>
			{props.notes.map((note) => {
				return (
					<NoteDetails key={note._id} title={note.title} textBody={note.textBody} _id={note._id} {...props} />
				);
			})}
		</div>
	);
};

const NoteDetails = (props) => {
	return (
		<div className="notes">
			<h3>{props.title}</h3>
			<p>{props.textBody}</p>
		</div>
	);
};

NoteDetails.default = {
	title: '',
	textBody: ''
};
export default MyNotes;
