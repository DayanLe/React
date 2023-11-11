import NavBar from "./componentes/NavBar/NavBar";
import "bulma/css/bulma.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={'Una pasadita por PERRO MALO!'}/>
        </div>
    );
}

export default App;