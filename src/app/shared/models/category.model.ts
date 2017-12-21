import { Task } from '../models/task.model';

export class Category {
   id: string;
   name: string;
   slut: string;
   about: string;
   created_at: string;
   tasks: Task[];
}
