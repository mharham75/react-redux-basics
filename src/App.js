import { Provider } from 'react-redux'
import './App.css'
import CakeComponent from './components/cake/CakeComponent'
import ChocolateComponent from './components/chocolate/ChocolateComponent'
import TodosComponenet from './components/todos/TodosComponenet'
import UserComponent from './components/user/UserComponent'
import store from './redux/store'

const App = () => {
  return (
    
    <Provider store={store}>
      <CakeComponent />
      <ChocolateComponent />
      <UserComponent />
      <TodosComponenet />
    </Provider>  
  )
}

export default App
