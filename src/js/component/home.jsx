import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotrone from "./Jumbotrone.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"



//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotrone/>
			<div style={{margin:"50px"}}>
				<Card title={"Primer card"} text={"Este es el texto de la primer card"}/>
                <Card title={"Segunda card"} text={"Este es el texto de la segunda card"}/>
				<Card title={"Tercer card"} text={"Este es el texto de la tercer card"}/>
				<Card title={"Cuarta card"} text={"Este es el texto de la cuarta card"}/>
			</div>
			<Footer/>
		</div>
		
		
	)
};

export default Home;
