import { AddTasks } from "@/components/AddTasks";
import TasksCard from "@/components/TasksCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import React from "react";

const TasksPage = async () => {
  const tasks = await getTasks();
  //   console.log(tasks);

  return (
    <div>
      <h2>Task Page: {tasks.length}</h2>
      <AddTasks createATask={createATask}></AddTasks>
      <div className="grid grid-cols-3 gap-5 pt-8">
        {tasks.map((task) => (
          <TasksCard key={task.id} task={task}></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
