import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import ColorPage from "./ColorPage";
import {v4 as uuid } from 'uuid';

const ColorRoutes = () => {

    const [colors, setColors] = useState([{name: "blue", color: "blue", id: 1}]);

    const addColor = (color) => {
        let newColor = { ...color, id: uuid() };
        setColors(colors => [...colors, newColor]);
    };

    return (
        <Routes>
            <Route path="/colors" element={<ColorList colors={colors}/>}/>
            <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>}/>
            <Route path="/colors/:color" element={<ColorPage/>} colors={colors}/>
            <Route path="*" element={<ColorList colors={colors}/>}/>
        </Routes>
    );



};
export default ColorRoutes;