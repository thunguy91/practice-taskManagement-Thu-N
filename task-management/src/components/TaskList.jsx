import { Link } from 'react-router'
import "./TaskList.css"

function TaskList(){
    const tasks = [
    {id: 1, title: "🧺 Laundry", description: "Wash, dry and fold the laundry"},
    {id: 2, title: "📚 Homework", description: "Complete homework and study"},
    {id: 3, title: "🍽️ Cooking", description: "Cook a delicious meal"}
];
    return (
        <div className='task-container'>
            <h1>My Task List</h1>
            <ul className='task-list'>
            {tasks.map((task)=> (
                <li key={task.id} className='task-item'>
                <Link to={`/task/${task.id}`} className='task-link'>{task.title} </Link></li>
            ))}
            </ul>
        </div>

    );
} 

export default TaskList