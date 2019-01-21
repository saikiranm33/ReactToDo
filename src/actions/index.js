

 const addToDoTask = (item) => {
  return {
    type: 'ADD_TODO',
    payload: item
  }
}



const updateToDoTask = (item) => {
  return {
    type: 'COMPLETED_TASK',
    payload: item
  }
}


 const deleteToDoTask = (item) => {
  return {
    type: 'DELETE_TASK',
    payload: item
  }
}

export { addToDoTask,updateToDoTask, deleteToDoTask} 
