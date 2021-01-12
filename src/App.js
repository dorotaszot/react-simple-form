import './App.css';

function App() {
  return (
    <div className="App">
      <form  className="form-wrapper">
        <input 
          className="form-input"
          type="text" 
          name="firstName" 
          placeholder="Enter first name"/>
        <input 
          className="form-input"
          type="text" 
          name="lastName" 
          placeholder="Enter last name"/>
        <input 
          className="form-input"
          type="text" 
          name="email" 
          placeholder="Enter email"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
