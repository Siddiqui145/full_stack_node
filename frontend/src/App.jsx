import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  //get through axios
  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data) //just get data and paste it this way
    }).catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Full Stack Application</h1>
        <p>
          Jokes : {jokes.length}
        </p>
        {
          jokes.map((joke, index) => (
            <div key= {joke.id}>
              <h3> {joke.title} </h3>
              <p> {joke.content} </p>
            </div>
          ))
        }
    </>
  )
}

export default App
