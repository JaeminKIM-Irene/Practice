import './App.css';
import {useEffect} from 'react';
import axios from 'axios';

function App() {
  //const URL = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc";
  const URL = "/1360000/VilageFcstInfoService_2.0";
  const KEY = "NcSjYDL8Z8bRfg2LLFwJ9ahuq%2B%2FZ7jiJAYhRBJgcouK2hjWLOF9ehGQTyv%2B8sywZZJuZrWsjdUJ%2BwN7%2B7fKLHw%3D%3D"

  //serviceKey : process.env.REACT_APP_API_KEY
  useEffect(() => {
    /*fetch(`${URL}?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json `, {
      headers: {
        Accept: "application / json",
      },
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })*/
  })

  function callData() {
    /*
    fetch(`${URL}?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json `, {
      headers: {
        Accept: "application / json",
      },
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    */
    
    try {
      let result = axios.get(URL, {   
        params : {
          serviceKey : process.env.REACT_APP_API_KEY,
          numOfRows : 1,
          pageNo : 10,
          returnType : 'json'
        }
    });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    
    /*
    try {
      let result = axios.get(URL, {   
        params : {
          serviceKey : process.env.REACT_APP_API_KEY,
          numOfRows : 1,
          pageNo : 10,
          returnType : 'json'
        }
    });
      console.log(result.response);
    } catch (error) {
      console.error(error.response);
    }
    */
  }

  return (
    <div className="App">
      <header className="App-header" onClick={callData}>
        Welcome to CONDAILY
      </header>
    </div>
  );
}

export default App;
