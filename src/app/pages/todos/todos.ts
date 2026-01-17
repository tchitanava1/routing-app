import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css'],
})
export class TodosComponent implements OnInit {
  todos: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    // Fetch 10 todos
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .subscribe((data) => (this.todos = data));
  }

  open(id: number) {
    // Navigate to the details page
    this.router.navigate(['/todos', id]);
  }
}
