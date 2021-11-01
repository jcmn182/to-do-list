
function TaskDelete({arrayDeletItems,clearStates}) {
    
    console.log(arrayDeletItems)
    
    return (
        <div className="container">
        {               
          arrayDeletItems.length > 0 &&  
          arrayDeletItems.map((tasks)=>{   
        return(             
        <div className="list-group list-group-flush" key={tasks.id}>   
            <div className="list-group-item d-flex justify-content-between align-content-center text-black-50">
            <p>{tasks.task}</p>
            </div>  
        </div>
            )})
        }
        {
            arrayDeletItems.length > 0 &&
         <div className="text-center">
            <button className="btn btn-warning" onClick={clearStates}>Clear Items</button>
        </div>
        }
    </div>
    
    )
}

export default TaskDelete
