import { getPosts } from './api/getPosts';

import {useState, useEffect} from 'react'
import './App.css';

function App() {

const[data,setData] = useState(null)

useEffect(()=>{

      getPosts().then(posts=>setData(posts))

})

  return (
    <div className="App">
        {
            data ? data.map((e)=><li>{e.title}</li>) : <h1>NO DATA</h1>

        }
    </div>
  );
}

export default App;
