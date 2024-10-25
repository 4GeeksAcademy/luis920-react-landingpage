import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotrone from "./Jumbotrone.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"

const Home = () => {
   const cards=[{
	id:1,
	title:"Honda integra 1988",
	text:"Este es el texto de la primer carta",
	image: "https://media.fastestlaps.com/honda-integra-type-r.jpg",
	button: "Primer boton"
   },{
    id:2,
	title:"Nissan gtr 2000",
	text:"Este es el texto de la segunda carta",
	image: "https://noticias.coches.com/wp-content/uploads/2014/07/Nissan-Skyline-HT-2000GT-R-1972-02.jpg",
	button: "Segundo boton"
	
	
   },{
    id:3,
	title:"Ford focus rs 2017",
	text:"Este es el texto de la tercer carta",
	image: "https://platform.cstatic-images.com/in/v2/stock_photos/9dfd1730-3a01-401a-a3dc-40db8003a0b6/36381f5e-53c8-4636-bf40-0e3f7cc54d42.png",
	button: "Tercer boton"
	
   },{
	id:4,
	title:"Mitsubishi lancer evo 2001",
	text:"Este es el texto de la cuarta carta",
	image: "https://images.classic.com/vehicles/4e66cf248d8ab13342675719b5204f872ced2109.jpg?ar=16%3A9&fit=crop&w=600",
    button:"Cuarto boton"
   }]
	return (
		<div>
			<Navbar/>
			<Jumbotrone/>
			<div className="card-container"  >
				
				{cards.map(item => (
               <Card key={item.id} title={item.title} text={item.text} image={item.image} button={item.button} />
              ))}

			</div>
			<Footer/>
		</div>
		
		
	)
};

export default Home;
