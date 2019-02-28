import React from 'react';

const MyNotes = (props) => {
	return (
		<div>
			{props.notes.map((note) => {
				return <div key={note._id} title={note.title} textBody={note.textBody} _id={note._id} {...props} />;
			})}
		</div>
	);
};

export default MyNotes;
