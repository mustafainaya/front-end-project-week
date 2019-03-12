import React from 'react';
import { Link } from 'react-router-dom';
import viewNotes from '../leftContent/ViewNotes';

const MyNotes = (props) => {
	return (
		<div>
			{props.notes.map((note) => {
				return (
					<NoteDetails key={note._id} title={note.title} textBody={note.textBody} _id={note._id} {...props}>
						<Link
							to={`/viewNote/${note._id}`}
							title={note.title}
							textBody={note.textBody}
							_id={note._id}
							{...props}
							component={viewNotes}
						>
							{' '}
						</Link>
					</NoteDetails>
				);
			})}
		</div>
	);
};

const NoteDetails = (props) => {
	return (
		<div className="notes">
			<h1>{props.tags}</h1>
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
