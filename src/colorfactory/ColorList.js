import React, {useState} from 'react';
import {Link} from "react-router-dom";

const ColorList = ({ colors }) => {


    return (
        <div>
            <div>
                <h1>Welcome to the color factory.</h1>
                <Link to="/colors/new"><h1>Add a color</h1></Link>

            </div>
            <div>
                <h3>Please select a color</h3>
                <ul>
                {colors.map(color => {<li>
                                    <Link to={`/colors/${color.name}`}>
                                        {color.name}
                                    </Link></li>}
                                    )}
                </ul>
                
            </div>
        
        </div>
    );


}
export default ColorList;