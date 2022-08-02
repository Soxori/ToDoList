import '../App.css';

function List(props) {
  return (
    <div className='listItems' key={props.id}>
      <h2>{props.listItem}</h2>
      <h4>Start - {props.startingTime}</h4>
      <h4>End -   {props.endingTime}</h4>
      <button className='DoneButton' onClick={() => props.handleDelete(props.id)}>Done</button>
    </div>
  );
}

export default List;
