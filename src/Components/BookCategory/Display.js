import './Display.css';

function Display(props){
    console.log(props.link);
return (

    <>
        <div className="outer">
               <div className="innerBlock">
                    <img className="bookImage" src={props.img} alt="Avatar" />
                    
                    <div className="textBlock">
                    <h2 className="bookTitle"> {props.bookname} </h2><br/>
                    <h3 className="bookDesc"> {props.description} </h3><br/>
                    <a href className="activeClass"> {props.link}</a>
                   
                    </div></div>
       
      
        </div>
       
    </>
);
}

export default Display;