import { useState, useEffect } from 'react';
import Display from './Display';

function Classic(){

    const [classicData, setClassic] = useState([{}]);

    useEffect(() => {

        fetch("https://book-6105e-default-rtdb.firebaseio.com/Classic.json")
            .then(res => res.json())
            .then((result) => {
                setClassic(result["-Mlide5nue_TJu6AjCD-"]);
            })

    }, []);
    return(
        <div>
           <p>Book List Section classic </p>
           {classicData.map((val) =>(
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

export default Classic;