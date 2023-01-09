// component import
import TaskItem from "./TaskItem";

// styles
import styles from "./TaskLists.module.css";

const TaskLists = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
    </ul>
  );
};

export default TaskLists;
