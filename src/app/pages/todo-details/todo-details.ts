import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Todo Details</h2>

    <!-- Show loading while todo is undefined -->
    <p *ngIf="!todo" style="color: gray;">Loading todo details...</p>

    <!-- Show data once fetched -->
    <div *ngIf="todo" class="todo-card">
      <p><strong>ID:</strong> {{ todo.id }}</p>
      <p><strong>Title:</strong> {{ todo.title }}</p>
      <p><strong>User ID:</strong> {{ todo.userId }}</p>
      <p>
        <strong>Status:</strong>
        <span [style.color]="todo.completed ? 'green' : 'red'">
          {{ todo.completed ? 'Completed' : 'Pending' }}
        </span>
      </p>
    </div>
  `,
  styles: [
    `
      .todo-card {
        border: 1px solid #ccc;
        padding: 16px;
        margin-top: 16px;
        border-radius: 8px;
        background: #fafafa;
      }
    `,
  ],
})
export class TodoDetailsComponent implements OnInit {
  todo: any = undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.todo = undefined; 

    
        this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe({
          next: (data) => {
            this.todo = data; 
          },
          error: (err) => {
            console.error('Error fetching todo:', err);
            this.todo = { title: 'Error loading todo', id: id };
          },
        });
      }
    });
  }
}
