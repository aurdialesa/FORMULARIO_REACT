import React from 'react';
import Formulario from  './components/formulario';


function App(){
    return(
        <div className="App">
            <div className="bg-light min-vh-100 py-5"></div>
            <div className="container">
                <h1 className="text-center mb-5 text-primary">Mi aplicacion React</h1>

            </div>
                <Formulario /> 

        </div>
    );

}
export default App;
