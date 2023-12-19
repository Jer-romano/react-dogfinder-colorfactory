import {Link, useParams} from "react-router-dom";


const ColorPage = ({colors}) => {

    const params = useParams();
    const colorName = params.color;

    const {name, color} = colors.find(color => color.name === colorName);

    return (
        <div style={{backgroundColor: color}}>
            <h1>THIS IS {name}.</h1>
            <h1>ISN'T IT BEAUTIFUL?</h1>

            <Link to="/colors"><h1>GO BACK</h1></Link>


        </div>
    );


};
export default ColorPage;