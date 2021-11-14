import React from 'react'
import Resume from './components/Resume'
import './components/style.css'

function App() {
  const [data, setData] = React.useState(null);


    console.log(data)
    
            
  return (
    <div className="App">
      <Resume />
     </div>
  );
}

export default App;
