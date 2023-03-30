import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'Front-End',pathMatch:'full'},
  {
  path: 'Front-End',
  loadChildren: () => import('./front-end/front-end.module').then(m => m.FrontEndModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
