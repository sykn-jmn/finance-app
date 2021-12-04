import React, { useState, useEffect } from 'react';
// import Group from './Group';
import NewTransactionForm from './NewTransactionForm';

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
    amount:900,
    date: new Date("January 5, 2021 01:01:01")
  }
]


function App() {
  
  const [history, setHistory] = useState(startingHistory);
  const [balance, setBalance] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    updateBalance();
    updateCategories();
  },[])

  const updateBalance = () => {
    let newBalance = 0;
    history.forEach((tx)=>
      newBalance+=Number.parseFloat(tx.amount)
    )
    setBalance(newBalance);
  }

  const updateCategories = () => {
    history.forEach(tx => {
      if(!categories.includes(tx.category)) 
      categories.push(tx.category)
    })
    setCategories([...categories]);
  } 

  const addTransaction = (tx) => {
    setHistory([...history,tx]);
    updateBalance();
    updateCategories();
  }

  const removeTransaction = (idx) => {
    history.splice(idx,1);
    updateBalance();
    updateCategories();
  }

  return (
    <div className="App">
      <NewTransactionForm addTransaction={addTransaction}/>
      <h2>GENERAL INFORMATION</h2>
      <h3>Balance: {balance}</h3>
      {/* <h2>GROUPED TRANSACTIONS</h2>
      {categories.map((category, idx)=>{
        return <Group key={idx} category={category} history={history}/>
      })} */}
      <h2>TRANSACTIONS</h2>
      {history.sort((tx1,tx2)=>{return tx1.date<tx2.date?1:-1}).map((tx,idx)=>
      {
        return (
          <div className="transaction" key={idx}>
            <h3>{tx.amount}</h3>
            <p>{tx.category}</p>
            <p>{tx.date.toLocaleString()}</p>
            <button onClick={()=>removeTransaction(idx)}>Remove</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
