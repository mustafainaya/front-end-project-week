import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<Link to={'/'}>Lambda Notes</Link>
			<Link to={'/'}>View Your Notes</Link>
			<Link to={'/'}>+Creat New Note</Link>
		</div>
	);
};

export default Nav;
