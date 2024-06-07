import logo from './logo.svg';
import './App.css';

function App() {
  const firstname = "Shantanu";
  const lastname="Pawar";
  const date=new Date();
  const hours=date.getHours();
  let timeOfDays
  if (hours <12){
    timeOfDays="Morning"
  }
  else if (hours >= 12 && hours<18){
    timeOfDays = "Afternoon"
  }
  else{
    timeOfDays = "Evening"
  }
  return (
    
    <div className="App">
      <h1>Hello I am {firstname} {lastname}</h1>
      <p>Good {timeOfDays}</p>
    </div>
  );
}

export default App;
