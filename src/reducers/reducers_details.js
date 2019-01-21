import addItem from '../actions/index'


const initalState = {
  todosList : [],
  completedList: [],
  inCompleteList:[],
};

const reducerDetails = (state = initalState,action) => {

  switch(action.type)
  {

    case 'ADD_TODO':


    let todos = [...state.todosList,{key : Math.random(), todoName:action.payload, pending:'true', completed:'false'}];

   console.log('Increment reducer'+JSON.stringify(todos));
   
    
    return{
         ...state,
         todosList : todos,
         inCompleteList:todos,

    }

    case 'COMPLETED_TASK':


    let totalToDoList = [ ...state.todosList];


			totalToDoList.map((todo) => {
				if (todo.key === action.payload.key) { 

          if(todo.completed === "true")
          {
	              todo.completed = 'false';
                todo.pending  = 'true';
          }
          else
          {
                todo.completed = 'true';
                todo.pending  = 'false';
          }
				}
			});


        let completedTaskList = [] ;
        let inCompletedTaskList = [];

      	totalToDoList.map((todo) => {
		
          if(todo.completed === "true")
          {
	             completedTaskList.push(todo)
          }
          else
          {
              inCompletedTaskList.push(todo)
          }

			});

			return {
         ...state, 
        completedList: completedTaskList,
        todosList:totalToDoList,
        inCompleteList:inCompletedTaskList,
         };

    


  case 'DELETE_TASK':

  let totalTaskItems = [ ...state.todosList];
  let completedList = [...state.completedList] ;
  let inCompletedItem = [...state.inCompleteList];

  let deleteItem = [action.payload];

totalTaskItems = totalTaskItems.filter(item => !deleteItem.includes(item))

completedList = completedList.filter(item => !deleteItem.includes(item))

inCompletedItem = inCompletedItem.filter(item => !deleteItem.includes(item))

			return {
         ...state, 
        completedList: completedList,
        todosList:totalTaskItems,
        inCompleteList:inCompletedItem,
         };

  }


  return state;
};


export default reducerDetails


