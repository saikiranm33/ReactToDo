

export const addToDoTask = (item) => {
  return {
    type: 'ADD_TODO',
    payload: item
  }
}



export const updateToDoTask = (item) => {
  return {
    type: 'COMPLETED_TASK',
    payload: item
  }
}



export const deleteToDoTask = (item) => {
  return {
    type: 'DELETE_TASK',
    payload: item
  }
}


  