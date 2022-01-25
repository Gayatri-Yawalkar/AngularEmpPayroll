import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router"
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AddempComponent } from "./component/addemp/addemp.component";
const routes: Routes = [
                        { path: '', redirectTo: 'empDetail', pathMatch: 'full' },
                        { path: 'empDetail',component: DashboardComponent },
                        { path: 'addEmployee',component: AddempComponent }
                        ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }