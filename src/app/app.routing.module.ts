import { HomeComponent } from './components/Home/Home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}