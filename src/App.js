import React,{useState} from 'react';
import './App.css';
import Search from './components/Search';
import Items from './components/Items'

import Axios from 'axios';
import Popup from './components/Popup';

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  })
  function generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=132f3ea57c4e8fc725aef7f0904cdf6c`
    return url
  }
  const handleInput = (e) => {
     let search = e.target.value;
     
     setState(prevState => {
       return {...prevState, search: search}
     })
     console.log('value:', search)
  }
  const search = (e) => {
    let path = '/search/movie'
    const newUrl = generateUrl(path) + '&query=' + state.search
    if (e.key === "Enter") {
      Axios(newUrl).then(({data}) => {
        let results = data.results
        setState(prevState => {
          console.log(results, 'wewew')
          return {...prevState, results}
        })
        console.log('movies:',data)
      })
    }
  }

  const openPopup = (id) => {
    let path = '/movie/' + id
    const newUrl = generateUrl(path)
    Axios(newUrl).then(({data})=> {
      let result = data
      console.log('popup', result)
      setState(prevState => {
        return {...prevState, selected: result}
      })
    })
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie<span>Free</span>Market</h1>
        <Search handleInput={handleInput} search={search}/>
      </header>
      <Items results={state.results} openPopup={openPopup}/>
      {(typeof state.selected.original_title != "undefined") 
      ? <Popup selected={state.selected} closePopup={closePopup}/> 
      : false}
    </div>
  );
}

export default App;
