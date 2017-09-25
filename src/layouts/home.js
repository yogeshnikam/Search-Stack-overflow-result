import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './home_header';

const Home = (props) => (
	<div>
		<Header />
		{props.children}
	</div>
)

export default Home