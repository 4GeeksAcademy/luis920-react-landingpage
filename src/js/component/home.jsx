import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotrone from "./Jumbotrone.jsx";
import Card from "./Card.jsx";



//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotrone/>
			<div>
				<Card/>
                <Card/>
				<Card/>
				<Card/>
			</div>
			
		</div>
		
		
	)
};

export default Home;
