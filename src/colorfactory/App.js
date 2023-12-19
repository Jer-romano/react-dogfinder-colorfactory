import { BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import ColorRoutes from "./ColorRoutes";

function App() {
    return (<div className="App">
        <BrowserRouter>
        <ColorRoutes/>
        </BrowserRouter>
    </div>);
}

export default App;