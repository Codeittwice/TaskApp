import { Priorities } from "./enums";

export type Task = {
  key: string;
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: Priorities;
  completedStatus: boolean;
};
