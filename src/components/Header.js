const Header = ({ addTask, showForm }) => {

  return(

    <header>
     <h1>Task Tracker</h1>
     <button className="btn" onClick={addTask}>{showForm ? 'Close' : 'Add Task'}</button>
    </header>

  )
}

export default Header;
