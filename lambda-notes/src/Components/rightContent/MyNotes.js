import React from 'react';
import { Link } from 'react-router-dom';
import viewNotes from '../leftContent/ViewNotes';
import styled from 'styled-components';
import './MyNotes.css';
const MyNotes = (props) => {
	return (
		<div>
			{props.notes.map((note) => {
				return (
					<NotesContainer>
						<Link
							to={`/viewNote/${note._id}`}
							title={note.title}
							textBody={note.textBody}
							_id={note._id}
							{...props}
							component={viewNotes}
						>
							{' '}
							<NoteDetails
								key={note._id}
								title={note.title}
								textBody={note.textBody}
								_id={note._id}
								{...props}
							/>
						</Link>
					</NotesContainer>
				);
			})}
		</div>
	);
};

const NoteDetails = (props) => {
	return (
		<NoteBox>
			<div className="notes">
				<h1>{props.tags}</h1>
				<h3>{props.title}</h3>
				<p>{props.textBody}</p>
			</div>
		</NoteBox>
	);
};

NoteDetails.default = {
	title: '',
	textBody: ''
};
export default MyNotes;

const NotesContainer = styled.section`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-left: 35%;
`;
const NoteBox = styled.section`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`;
