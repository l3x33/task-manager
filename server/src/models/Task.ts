
// public class Task{
//     id:number;
//     title:string;
//     description:string;
//     completed:boolean;
//     dueDate:Date;
//     priority:string;

//     constructor(title:string,description:string,priority:string){
//         this.title=this.title;
//         this.description=description;
//         this.completed=false;
//         this.priority=priority
//     }
//     }
// }

export interface Task{
    id:number;
    title:string;
    description:string;
    completed:boolean;
    dueDate:Date;
    priority:string;
}