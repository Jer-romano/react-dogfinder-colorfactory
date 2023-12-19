import React from 'react';
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {

    const { name } = useParams();
    const dog = dogs.find(el => el.name === name);
    
    return (<div>
                <h2>{dog.name}</h2>
                <h3>Age: {dog.age}</h3>
                <img src={dog.src} alt='A picture of a dog' />
                <h3>Facts</h3>
                <ul>
                    {dog.facts.map(fact => <li>{fact}</li>)}
                </ul>
            </div>);

}
export default DogDetails;