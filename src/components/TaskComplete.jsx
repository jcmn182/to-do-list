import {FaRegTimesCircle} from 'react-icons/fa'

function TaskComplete({arrayCompletItems,remove}) {
   
    return (
        <div className="container">
        {               
          arrayCompletItems.length > 0 &&  
          arrayCompletItems.map((tasks)=>{   
        return(             
        <div className="list-group list-group-flush" key={tasks.id}>   
            <div className="list-group-item d-flex justify-content-between align-items-center text-black-50">
            <p className="m-0"><s>{tasks.task}</s></p>
            <div className={{float:"right"}}>
                    <button type="button" className="delete-btn" onClick={ () =>remove(tasks.id)}>
                        <FaRegTimesCircle/>
                    </button>
                </div>
            </div>  
        </div>
            )})
        }
    </div>
    
    )
}

export default TaskComplete
