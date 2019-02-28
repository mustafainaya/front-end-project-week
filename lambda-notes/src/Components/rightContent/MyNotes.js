import React from 'react';

const MyNotes = (props) => {
	return (
		<div>
			{props.notes.map((note) => {
				return <div key={note._id} title={note.title} />;
			})}
		</div>
	);
};

export default MyNotes;
