import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {

    const INITIAL_STATE = {
        name: "",
        color: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
        navigate("/colors");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Color name:</label>
            <input type="text" 
                   id="name"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
            />
            <label htmlFor='color'>Pick a color:</label>
            <input type="color" 
                   id='color'
                   name="color"
                   value={formData.color}
                   onChange={handleChange}
            />
            <button>Add Color</button>
        </form>
    );


};
export default NewColorForm;