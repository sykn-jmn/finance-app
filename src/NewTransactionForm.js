import { useState } from "react";

const NewTransactionForm = ({addTransaction}) => {
    const [transaction, setTransaction] = useState(
        {
            amount:0,
            category:"food",
            date: new Date()
        }
    );

    const handleChange = (data) => {
        transaction[data.target.name] = data.target.value;
        setTransaction({...transaction});
    }
  
    const submit = (data) => {
      data.preventDefault();
      transaction.date = new Date();
      setTransaction({...transaction});
      addTransaction(transaction);
    }

    return (
    <>
        <h2>NEW TRANSACTION</h2>
        <form onSubmit={submit}>
            <input 
                type="text" 
                name="category" 
                placeholder="category"
                onChange={handleChange}
            /><br/>
            <input 
                type="number" 
                name="amount" 
                placeholder="amount"
                onChange={handleChange}
            /><br/>
            <input type="submit" />
        </form>
    </>
    )
}

export default NewTransactionForm;