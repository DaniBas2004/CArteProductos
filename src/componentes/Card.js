import React from "react";



function Card({title,imagen,url,text}){
  return (
    <div className="contenedorpadre">
    <div className="card text-center animate__animated animate__flipInY">

      <div className="overflow">
        <img src={imagen} className="card-img-top" />
      </div>

      <div className="card-body">
        <h3 className="card-titler">{title}</h3>
        <p className="card-text  text-secondary" >{text}</p>
        <a href={url} target="_blank" className="btn btn-outline-secondary">
          ¡Comunicarme Ya!
        </a>
      </div>
    </div>
    </div>
  );
}
export default Card;