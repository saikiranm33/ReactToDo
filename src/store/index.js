import { createStore } from 'redux';
import { Provider} from 'react-redux';
import rootReducer from '../reducers'

const initalState = {
  counter: 0,
  todosList : [],
  upDateList :[],
};


const store = createStore(rootReducer);

export default store;