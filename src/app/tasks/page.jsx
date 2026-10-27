import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/tasks";
import React from "react";

const TasksPage = async () => {
  const tasks = await getTasks();
  //   console.log(tasks);

  return (
    <div>
      <h2>Task Page: {tasks.length}</h2>
      <div className="grid grid-cols-3 gap-5">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
