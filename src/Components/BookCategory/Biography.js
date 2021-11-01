import { useState, useEffect } from 'react';
import Display from './Display';

function Biography(){

    const [biographyData, setBiography] = useState([{}]);

    useEffect(() => {

        fetch("https://book-6105e-default-rtdb.firebaseio.com/Biography.json")
            .then(res => res.json())
            .then((result) => {
                setBiography(result["-MlOkw8-sM0xFukd9EeR"]);
            })

    }, []);
    
    return(
        <div>
           <p>Book List Section </p>
           {biographyData.map((val) =>(
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

export default Biography;