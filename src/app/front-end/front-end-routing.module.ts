import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutsbComponent } from './about/aboutsb/aboutsb.component';
import { AboutsmkComponent } from './about/aboutsmk/aboutsmk.component';
import { BlogsComponent } from './about/blogs/blogs.component';
import { CoursesComponent } from './courses/courses.component';
import { CurrencyMarketComponent } from './courses/currency-market/currency-market.component';
import { EquityMarketComponent } from './courses/equity-market/equity-market.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: FrontEndComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'aboutsmk', component: AboutsmkComponent },
      { path: 'aboutsb', component: AboutsbComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'Equity', component: EquityMarketComponent },
      { path: 'currency', component: CurrencyMarketComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule { }
