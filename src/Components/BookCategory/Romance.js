import { useState, useEffect } from 'react';
import Display from './Display';

function Romance(){
    const [romanceData, setRomance] = useState([{}]);

    useEffect(() => {

        fetch("https://book-6105e-default-rtdb.firebaseio.com/Romance.json")
            .then(res => res.json())
            .then((result) => {
                setRomance(result["-MlOmroJmnhMhtlS8y8A"]);
            })

    }, []);
    return(
        <div>
           Book List Section horror
           {romanceData.map((val) =>(
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

export default Romance;