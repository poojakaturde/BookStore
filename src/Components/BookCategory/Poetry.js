import { useState, useEffect } from 'react';
import Display from './Display';

function Poetry(){

    const [poetryData, setPoetry] = useState([{}]);

    useEffect(() => {

        fetch("https://book-6105e-default-rtdb.firebaseio.com/Poetry.json")
            .then(res => res.json())
            .then((result) => {
                setPoetry(result["-Mlie7STCaa1MlsXycSl"]);
            })

    }, []);
    return(
        <div>
           <p>Book List Section poetry </p>
           {poetryData.map((val) =>(
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

export default Poetry;