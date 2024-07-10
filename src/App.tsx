// import Homework06 from './Homeworks/homework06';
import './App.css';
import Input from './Lessons/Input/Input';

function App() {
  return (
    <div className="App">
    <Input 
      id="username" 
      name="username" 
      label="Username" 
      placeholder="Enter your username" 
    />
    <Input 
      id="password" 
      name="password" 
      type="password" 
      label="Password" 
      placeholder="Enter your password" 
      error="Password is required" 
    />
    <Input 
      id="email" 
      name="email" 
      type="email" 
      label="Email" 
      placeholder="Enter your email" 
      disabled={true} 
    />
  </div>
    
  );
}

export default App;
