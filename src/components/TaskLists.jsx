// component import
import TaskItem from "./TaskItem";

// styles
import styles from "./TaskList.module.css";

const TaskLists = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskLists;
