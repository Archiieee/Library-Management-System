import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { LoanComponent } from './loan/loan.component';
import { PublisherComponent } from './publisher/publisher.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddPublisherComponent } from './add-publisher/add-publisher.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';
import { UpdatePublisherComponent } from './update-publisher/update-publisher.component';
import { UpdateStudentComponent } from './update-student/update-student.component'


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    LoanComponent,
    PublisherComponent,
    StudentComponent,
    AdminComponent,
    SidenavComponent,
    HomeComponent,
    AddAdminComponent,
    AddBooksComponent,
    AddStudentComponent,
    AddAuthorComponent,
    AddPublisherComponent,
    AddLoanComponent,
    UpdateBookComponent,
    UpdateAdminComponent,
    UpdateAuthorComponent,
    UpdateLoanComponent,
    UpdatePublisherComponent,
    UpdateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
