import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TodosComponent } from './pages/todos/todos';
import { TodoDetailsComponent } from './pages/todo-details/todo-details';
import { weekendGuard } from './guards/weekend-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoDetailsComponent },
  {
    path: 'weekend-party',
    loadComponent: () =>
      import('./pages/weekend-party/weekend-party').then((m) => m.WeekendPartyComponent),
    canActivate: [weekendGuard],
  },
  { path: '**', redirectTo: 'home' },
];
