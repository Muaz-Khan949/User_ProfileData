import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { AddUser } from './components/add-user/add-user';
import { UserList } from './components/user-list/user-list';
import { EditUser } from './components/edit-user/edit-user';

export const routes: Routes = [
    {path: "", component: UserList},
  {path: "add", component: AddUser},
  {path: "edit/:id", component: EditUser},
];