import { useState } from "react";

/// styles
import styles from "./TaskItem.module.css";

// library imports
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const TaskItem = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckbox = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          // checked={task.checked}
          checked={isChecked}
          onChange={handleCheckbox}
          task={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
    </li>
  );
};

export default TaskItem;
