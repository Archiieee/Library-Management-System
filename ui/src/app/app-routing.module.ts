import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { StudentComponent } from './student/student.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'authors',
    component: AuthorComponent,
  },
  {
    path: 'loans',
    component: LoanComponent,
  },
  {
    path: 'publishers',
    component: PublisherComponent,
  },
  {
    path: 'students',
    component: StudentComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'add-books',
    component: AddBooksComponent,
  },
  {
    path: 'add-admins',
    component: AddAdminComponent,
  },
  {
    path: 'add-students',
    component: AddStudentComponent,
  },
  {
    path: 'add-authors',
    component: AddAuthorComponent,
  },
  {
    path: 'add-publisher',
    component: AddPublisherComponent,
  },
  {
    path: 'add-loans',
    component: AddLoanComponent,
  },
  {
    path: 'update-book/:id',
    component : UpdateBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

