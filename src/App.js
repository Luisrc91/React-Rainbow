import React, { useState } from 'react';
// Make sure to import the component we just built:
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';
import './App.css';

function App(){
    let [colors, setColors] = useState ( [
        // 'violet', 'blue',
        // 'lightblue', 'green',
        // 'greenyellow', 'yellow',
        // 'orange', 'red'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} key={i} />
        )
    })

    const addColor = (newColor) => {
      setColors([...colors, newColor])
    }

    return (
        <div className="App gridContainer">
            {colors.map((color, i) => 

        <ColorBlock  key={i} color={color} />
    )}

            <ColorForm addColor ={addColor}/>
        </div>
    )
}


export default App;


    









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
   
//     </div>
//   );
// }

// export default App;
