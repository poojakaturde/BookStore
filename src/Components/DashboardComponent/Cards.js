import React from "react";
import { useHistory } from 'react-router-dom';
import './Cards.css';

function Cards(props) {
    const history = useHistory();

    function showList(){
        if(props.category==="Biography Section"){
            history.push("/biography");
        }
        else if(props.category==="Cooking Section"){
            history.push("/cooking");
        }
        else if(props.category==="Comic Books"){
            history.push("/comic");
        }
        else if(props.category==="Romance Stories"){
            history.push("/romance");
        }
        else if(props.category==="Horror Section"){
            history.push("/horror");
        }
        else if(props.category==="Poetry Books"){
            history.push("/poetry");
        }
        else if(props.category==="Classic Books"){
            history.push("/classic");
        }
    }
    return (

        <React.Fragment>
            <body className="border">
            <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                   
                        <img src={props.imgsrc} className = "card_image" alt="Avatar" />
                        </div>
                        <div className="flip-card-back">
                  
                        <h2 className="category-heading"> {props.category} </h2>
                        <button className ="cardButton" onClick={showList}>Show Books </button></div>
            </div>
           </div>
            </body>
           
        </React.Fragment>
    );
}

export default Cards;