import { Category } from './category.model';
import { Status } from './status.model';
import { User } from './user.model';

export class Task {
  id: string;
  subject: string;
  user: User;
  category: Category;
  status: Status;
  important: boolean;
  created_at: string;
  start: string;
  due: string;
}
