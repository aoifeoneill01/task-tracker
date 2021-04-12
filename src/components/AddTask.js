import { useState } from 'react'

const AddTask = ({ addTask }) => {

 const [text, setText] = useState('')
 const [day, setDay] = useState('')
 const [reminder, setReminder] = useState(false)

 const onSubmit = (e) => {
   e.preventDefault()

   if(!text){
     alert('Please add task')
     return
   }

   addTask({ text, day, reminder })

   setText('')
   setDay('')
   setReminder(false)
 }

  return(
    <form onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text}
        onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label>Day & Time</label>
        <input type="text" placeholder="Add Day & Time" value={day}
        onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div>
        <label>Set Reminder</label>
        <input
        className="checkbox"
        type="checkbox"
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input className="form-btn" type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask
