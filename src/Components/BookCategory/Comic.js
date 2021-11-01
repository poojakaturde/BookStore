import { useState, useEffect } from 'react';
import Display from './Display';

function Comic(){
    const [comicData, setComic] = useState([{}]);

    useEffect(() => {

        fetch("https://book-6105e-default-rtdb.firebaseio.com/ComicBook.json")
            .then(res => res.json())
            .then((result) => {
                setComic(result["-MlOli21Aws_ve_ucDI5"]);
            })

    }, []);
    return(
        <div>
           Book List Section Comic
           {comicData.map((val) =>(
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

export default Comic;