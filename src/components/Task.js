import icon from './images/x.svg'

const Task = ({ task, onDelete, onToggle }) => {

  return(
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
     <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      </div>
      <div>
      <img src={icon} alt="delete icon" onClick={onDelete}/>
      </div>
    </div>
  )
}
export default Task;
