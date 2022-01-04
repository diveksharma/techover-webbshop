import React from 'react';
import { Button } from '@material-ui/core';
import Navbar from '../../Navbar/Navbar';


const Home = (props) => {
	return (
		<div>
			<Navbar/>
			<h1>Home</h1>
			<Button>Hello</Button>
		</div>
	);
};

export default Home;
