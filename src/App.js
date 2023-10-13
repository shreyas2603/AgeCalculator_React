import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(null);
  const [dates,setDates]=useState(null);
  const handleClick = () => {
    if (dates) {
      const birthYear = new Date(dates).getFullYear();
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birthYear;
      setAge(calculatedAge);
    }
  };
  
  const currentDate = new Date().toISOString().slice(0, 10);
  
  return (
    <div className="App">
      <div className="container">
        <h1>Age Calculator</h1>
        <br />
        <p>Enter your date of birth</p>
        <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
          <input className="date-input" type="date" max={currentDate} onChange={(e) => setDates(e.target.value)} />
          <button onClick={handleClick}>Calculate Age</button>
        </form>

        {age !== null && <h2>{`You are ${age} years old`}</h2>}
      </div>
    </div>
  );
}

export default App;
