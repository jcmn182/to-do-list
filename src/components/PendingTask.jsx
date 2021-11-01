import React from 'react'
import {FaRegEdit,FaRegCheckCircle} from 'react-icons/fa'
 const PendingTask = ({items,update,seteditText,edit,id,editText,handleEdit,completeTask}) => {
    return (
        <div className="container">
            {   
                items.length > 0 &&            
                items.map((item)=>{
                  
            return(             
            <div className="list-group list-group-flush" key={item.id}> 
                { edit & item.id ===id?
                    <form onSubmit={handleEdit}>
                    <div className="mb-3 form">
                      <input type="text" className="form-control  m-2" placeholder={item.task} onChange={(e)=>seteditText(e.target.value)} value={editText} required />
                      <button  type="submit" className="btn btn-warning m-2" >Edit</button>
                    </div>
                  </form>
                :
                <div className="list-group-item d-flex justify-content-between align-items-center">
                <p className="m-0">{item.task}</p>
                <div className={{float:"right"}}>
                     <button type="button" className="complete-btn" onClick={ () =>completeTask(item.id)}>
                        <FaRegCheckCircle/>
                    </button>
                    <button type="button" className="edit-btn" onClick={ () =>update(item.id)}>
                        <FaRegEdit/>
                    </button>
                </div>
                </div>}
            </div>
                )})
            }
        </div>
    )
}

export default PendingTask;
