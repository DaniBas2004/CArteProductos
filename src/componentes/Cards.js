import React from 'react'
import Card from "./Card"
import "../hojas-de-estilo/Cards.css";
import image1 from "../Imagenes/estampado 2.jpg"
import image2 from "../Imagenes/gorra estampada.jpg"
import image3 from "../Imagenes/pocillo mama.jpg"
import image4 from "../Imagenes/pocillos magicos.jpg"




const cards =[
    {
        id: 1,
        title:"Playera con Estampado",
        image: image1,
        url:"https://wa.me/573228962152?text=Me interesa la Playera con estampado , me puedes dar mas informacion?",
        text:"Playera sencilla (variedad de telas) con estampado diseñado por el cliente"
    },
    {
        id: 2,
        title:"Gorra con Estampado",
        image: image2,
        url:"https://wa.me/573228962152?text=Me interesa la Gorra con estampado , me puedes dar mas informacion?",
        text:"Gorra sencilla con estampado diseñado por el cliente "
    },
    {
        id: 3,
        title:"Mug/Taza Sencilla con Estampado",
        image: image3,
        url:"https://wa.me/573228962152?text=Me interesa la taza con estampado , me puedes dar mas informacion?",
        text:"Mug/Taza sencilla con estampado diseñado por el cliente"
    },
    {
        id: 4,
        title:"Mug/Taza Magica con Estampado",
        image: image4,
        url:"https://wa.me/573228962152?text=Me interesa la Taza Magica con estampado , me puedes dar mas informacion?",
        text:"Mug/Taza que cambia de color con la temperatura, con estampado diseñado por el cliente"
    },
    
    
]

function Cards() {
  return (
    <div className='container  d-flex justify-content-center h-100 align-items-center '>
        <div className='row'>
            {
                cards.map(card=>(          
            <div className="col-md-3" key={card.id}>
                <Card title={card.title} imagen={card.image} url={card.url} text={card.text}/>
            </div>))
            }
        </div>
    </div>
  )
}

export default Cards