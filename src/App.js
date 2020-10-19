import React, {useState} from 'react';
import './App.css';
import Forms from './components/Forms';
import Lists from './components/Lists'

function App() {
  const [allData, setAllData] = useState(() => {
    const data = localStorage.getItem('data');
    return data !== null
      ? JSON.parse(data)
      : [];
  })

  return (
    <div>
      <Forms allData={allData} setAllData={setAllData} />
      <Lists allData={allData} setAllData={setAllData} />
    </div>

  );
}

export default App;
