

const Group = ({category,history}) => {
    const transactions = [];
    history.forEach((tx)=>{
        if(tx.category == category){
            transactions.push(tx);
        }
    })
    return (
        <div>
            <h3>{category}</h3>
          {transactions.map((tx,idx)=>{
            return (
                <>
                    <p>{tx.amount}</p>
                    <p>{tx.date.toLocaleString()}</p>
                </>
            )
          })}  
        </div>
    )
}

export default Group;