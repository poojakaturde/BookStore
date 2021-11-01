import { useState, useEffect } from 'react';
import Display from './Display';

function Horror(){

    const [horrorData, setHorror] = useState([{}]);

    useEffect(() => {

        fetch("https://book-6105e-default-rtdb.firebaseio.com/Horror.json")
            .then(res => res.json())
            .then((result) => {
                setHorror(result["-MlicpleHNRtq33u7OKR"]);
            })

    }, []);
    return(
        <div>
           <p>Book List Section horror</p>
           {horrorData.map((val) =>(
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

export default Horror;