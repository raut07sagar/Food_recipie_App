import React from "react";
import "./App.css"
const Cards = ({ title, image, calories, ingredients,dietLabels,dishType,url }) => {
    return (


        <div id="container">

            <div class="product-details">
                <h1>{title}</h1>
                <p> <b>calories</b>: {calories}</p>
                <p>dietLabels : {dietLabels}</p>
                <p>dishType : {dishType}</p>
                
                <a href={url}><p>URL: {url}</p></a>
            </div>

            <div class="product-image">

                <img src={image} alt="" />
                <div class="info">
                    <ol> <h1>ingredients </h1>
                        {ingredients.map(ele => (
                            <li>{ele.text} </li>
                        ))}
                    </ol>
                </div>
            </div>

        </div>


    )
};







export default Cards;
