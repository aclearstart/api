import { ITask } from "task/tasks.interface";

export interface IStudent {
  id: string;
  name: string;
  completedTasks: ITask[];
  nextTasks: ITask[];
}