import React from 'react'
import {FaRegEdit, FaRegTimesCircle,FaRegCheckCircle} from 'react-icons/fa'
 const List = ({items,remove,update,seteditText,edit,id,editText,handleEdit,completeTask}) => {
    return (
        <div className="container">
            {               
                items.map((item)=>{
                  
            return(             
            <div className="list-group list-group-flush" key={item.id}> 
                { edit & item.id ===id?
                    <form onSubmit={handleEdit}>
                    <div className="mb-3 form">
                      <input type="text" className="form-control  m-2" placeholder={item.task} onChange={(e)=>seteditText(e.target.value)} value={editText} />
                      <button  type="submit" className="btn btn-warning m-2" >Edit</button>
                    </div>
                  </form>
                :
                <div className="list-group-item d-flex justify-content-between align-content-center">
                <p className={item.taskComplete? "line_through" : "" }>{item.task}</p>
                <div className={{float:"right"}}>
                     <button type="button" className="complete-btn" onClick={ () =>completeTask(item.id)}>
                        <FaRegCheckCircle/>
                    </button>
                    <button type="button" className="edit-btn" onClick={ () =>update(item.id)}>
                        <FaRegEdit/>
                    </button>
                    <button type="button" className="delete-btn" onClick={ () =>remove(item.id)}>
                        <FaRegTimesCircle/>
                    </button>
                </div>
                </div>}
            </div>
                )})
            }
        </div>
    )
}

export default List;
