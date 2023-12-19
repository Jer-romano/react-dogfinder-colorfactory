import React from 'react';
import DogDetails from './DogDetails';
import { Link } from "react-router-dom";
//Dog list should simply 
//The Nav component should just be a ul of Link components
const DogList = ({ dogs }) => {

    return (<div>
        <h2>Dogs List</h2>
        {dogs.map(dog => {
            return (
                <div>
                    <h3><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h3>
                    <img src={`${dog.src}`}/>
                </div>
            );
        })}

    </div>);


};

export default DogList;