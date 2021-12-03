import React, { useState, useEffect } from 'react';

const startingHistory = [
  {
    category:"food",
    amount:-100,
    date: new Date("January 1, 2021 01:01:01")
  },
  {
    category:"house",
    amount:-200,
    date: new Date("January 2, 2021 01:01:01")
  },
  {
    category:"food",
    amount:-100,
    date: new Date("January 3, 2021 01:01:01")
  },
  {
    category:"food",
    amount:-100,
    date: new Date("January 4, 2021 01:01:01")
  },
  {
    category:"job",
    amount:500,
    date: new Date("January 5, 2021 01:01:01")
  }
]


function App() {
  
  const [history, setHistory] = useState(startingHistory);


  return (
    <div className="App">
      {history.map((tx,idx)=>
      {
        return (
          <div className="transaction" key={idx}>
            <h3>{tx.amount}</h3>
            <p>{tx.category}</p>
            <p>{tx.date.toLocaleString()}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
