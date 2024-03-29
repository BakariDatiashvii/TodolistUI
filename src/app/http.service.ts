import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Itodolist } from './interfaces/todolist';
import { Observable } from 'rxjs';
import { idText } from 'typescript';
import { TaskEditModel } from './component/tasks/models/task-edit.model';
import { HttpResult } from './component/tasks/models/htttp-result';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl="https://localhost:7169"
  http=inject(HttpClient);
  constructor() { }
  
  getalltask(){
   return this.http.get<Itodolist[]>(this.apiUrl+"/ToDoTaskController/getalltask")
  }

  CreateTask(model: TaskEditModel | undefined){
    return this.http.post(this.apiUrl + '/ToDoTaskController/create-task', model)
  }

  DeleteTask (id: string){
    return this.http.post(this.apiUrl + '/ToDoTaskController/DeleteTask', {id: id})
  }


  gettask(id: any) {
    return this.http.get<TaskEditModel>(`${this.apiUrl}/ToDoTaskController/getbyid/${id}`);
  }
  
  updateTask(model: TaskEditModel | undefined) {
    return this.http.post(
      this.apiUrl + '/ToDoTaskController/updateTask',
      model
    );
  }
  

  // addTodoService(newTodo: Itodolist): Observable<Itodolist> {
  //   newTodo.id = 0;
  //   return this.http.post<Itodolist>(this.apiUrl + '/api/Entity/create-task', newTodo);
  // }
  //createListTask(itudolist:Itodolist){
  //  return this.http.post<Itodolist>(this.apiUrl+"api/Entity/create-task")
  //}
}
