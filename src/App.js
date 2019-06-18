import React from 'react';
import logo from './logo.svg';
import './App.css';


///fetchData(){
   
//  fetch('http://jsonplaceholder.typicode.com/todos')
//.then(response => response.json())
//.then(parsedJSON => console.log(parsedJSON.rsults))
//.catch(error => console.log('parsing failed', error))

//}

render() {
  return(
      <div className='todolistMain'>
      <div className='header'>
          <form onSubmit={this.addItem}>
              <input ref={a() => this._inputElement. = a} placeholder='enter task'>
              </input>
              <button type='submit'>add</button>
              </form>
              </div>
              </div>
  );

 }


}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My List</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


