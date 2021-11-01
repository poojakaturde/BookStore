import './Dashboard.css';
import React from 'react';
import Cards from './Cards';
import { useState, useEffect } from 'react';

function Dashboard() {

    const [categoryData, setCategory] = useState([{}]);

    useEffect(() => {

        fetch("https://book-6105e-default-rtdb.firebaseio.com/category.json")
            .then(res => res.json())
            .then((result) => {
                setCategory(result["-MlO2JR2-D5lxMvSp67d"]);
            })

    }, []);
    
    console.log(categoryData);
    return (
        <React.Fragment className="dash">

            {categoryData.map((val) =>(
                    <Cards
                        imgsrc={val.imgsrc}
                        category={val.category_title}
                    ></Cards>
             ))
            }


        </React.Fragment>



    );

}

export default Dashboard;