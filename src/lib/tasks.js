import data from "../data/tasks.json";

const tasks = data.tasks;
export const getTasks = async () => {
  return tasks;
};

export const postTask = async (newTask) => {
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  return { ok: true, massege: "task added successfully" };
};
