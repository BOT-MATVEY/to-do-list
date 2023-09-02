import { TagProps } from "./ui/Tag";

export interface ToDoItem {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    dates: { startDate: string; endDate: string };
    tags: TagProps[];
}
