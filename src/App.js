import { useRef, useState } from 'react';
import './App.css';
import List from './components/List';

function App() {

  const [listState, setListState] = useState([]);
  const itemInputRef = useRef();
  const startingDateTime = useRef();
  const endingDateTime = useRef();
  const randomId = Math.floor(Math.random() * 125459);

  const addItem = (id, listItem, startingTime, endingTime) => {
    setListState(oldListState => [...oldListState, {id: id, listItem: listItem, startingTime: startingTime, endingTime: endingTime}]);
  }
  
  const handleClick = () => {
    addItem(randomId, itemInputRef.current.value, startingDateTime.current.value, endingDateTime.current.value);
  }

  const handleDeleteThisOne = (id) => {
    const filtered =[...listState].filter((list) => !(list.id === id));
    setListState([...filtered]);
  }

  const handleDelete = () => {
    setListState([]);
  }

  return (
    <div className="App">
        <input type='text' ref={itemInputRef} placeholder='Enter item to list'></input>
        Starting time
        <input type='time' ref={startingDateTime} placeholder='Enter starting time '></input>
        Ending time
        <input type='time' ref={endingDateTime} placeholder='Enter endingtime '></input>
        <button className='SubmitButton' onClick={() => handleClick()}>Submit</button>
        <button className='ClearButton' onClick={() => handleDelete()}>Clear list</button>
        <h1 className='toDoTitle'>To Do:</h1>
        {
        listState.map((list) => 
        <div key={list.id} className='listItemDiv'> 
          <List id={list.id} listItem={list.listItem} startingTime={list.startingTime} endingTime={list.endingTime} handleDelete={handleDeleteThisOne}/>
        </div>)
        }
    </div>
  );
}
export default App;