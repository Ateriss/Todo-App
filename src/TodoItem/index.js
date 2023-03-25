import react from "react";
import './todoItem.css';


function TodoItem(props){
    return(
        <li className="TodoItem">
        <input className={` TodoCheck Icon-check ${props.completed && 'Icon-check--active'}`} type={"checkbox"} onChange={props.onComplete} ></input>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          X
        </span>
      </li>
    );
}

export { TodoItem };