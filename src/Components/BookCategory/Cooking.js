import { useState, useEffect } from 'react';
import Display from './Display';

function Cooking(){
    const [cookingData, setCooking] = useState([{}]);

    useEffect(() => {

        fetch("https://book-6105e-default-rtdb.firebaseio.com/CookBooks.json")
            .then(res => res.json())
            .then((result) => {
                setCooking(result["-MlOmHQVchUuejoL8gLg"]);
            })

    }, []);
    return(
        <div>
           Book List Section Cookbook
           {cookingData.map((val) =>(
                    <Display
                        img={val.Book_Cover}
                        description={val.Book_Description}
                        bookname={val.Book_Name}
                        link={val.Buy_link}
                    ></Display>
             ))
            }
        </div>
    );
}

export default Cooking;