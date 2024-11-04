import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransfersTableComponent } from './transfers/transfers-table/transfers-table.component';
import { TransferDetailComponent } from './transfers/transfer-detail/transfer-detail.component';
import { ContactsTableComponent } from './contacts/contacts-table/contacts-table.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { EmployeesTableComponent } from './employees/employees-table/employees-table.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';


export const routes: Routes = [
    { path: "dashboard", component: DashboardComponent, title: "Abid Quincaillerie | Dashboard"},
    { path: "contacts", component: ContactsTableComponent, title: "Abid Quincaillerie | Contacts"},
    { path: "contacts/:id", component: ContactDetailComponent, title: "Abid Quincaillerie | Contact-Details" },
    { path: "transfers", component: TransfersTableComponent, title: "Abid Quincaillerie | Transfers" },
    { path: "transfers/:id", component: TransferDetailComponent, title: "Abid Quincaillerie | Transfer-Details" },
    { path: "employees", component: EmployeesTableComponent, title: "Abid Quincaillerie | Employees" },
    { path: "employees/:id", component: EmployeeDetailComponent, title: "Abid Quincaillerie | Employee-Details" },

];
