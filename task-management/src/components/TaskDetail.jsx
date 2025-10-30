import { Link } from 'react-router'
import { useParams } from 'react-router'
import './TaskDetail.css'
// import TaskList from './TaskList';

function TaskDetail(){
    const { id } = useParams();
    const tasks = [
    {id: 1, title: "Laundry", description: "Wash, dry, and fold the laundry"},
    {id: 2, title: "Homework", description: "Complete homework and study"},
    {id: 3, title: "Cooking", description: "Cook a delicious meal"}
];

    const task = tasks.find((t) => String(t.id) === id);
    const backButton = <button><Link to="/" className='back-button'>Go Back to Task List</Link></button>

    
  if (!task) {
    return (
      <div className='detail-container'>
        <h2>Cannot find task!</h2>
        {backButton}
        </div>
    )}

    return (
        <div className='detail-container'>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            {backButton}
        </div>
    )
}

export default TaskDetail;