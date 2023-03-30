import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './front-end-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './carousel/carousel.component';
import { CoursesComponent } from './home/courses/courses.component';
import { ServiceComponent } from './home/service/service.component';
import { AboutComponent } from './about/about.component';
import { AboutsmkComponent } from './about/aboutsmk/aboutsmk.component';
import { AboutsbComponent } from './about/aboutsb/aboutsb.component';
import { BlogsComponent } from './about/blogs/blogs.component';
import { EquityMarketComponent } from './courses/equity-market/equity-market.component';
import { CurrencyMarketComponent } from './courses/currency-market/currency-market.component';
import { DerivativesMarketComponent } from './courses/derivatives-market/derivatives-market.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FrontEndComponent,
    CarouselComponent,
    CoursesComponent,
    ServiceComponent,
    AboutComponent,
    AboutsmkComponent,
    AboutsbComponent,
    BlogsComponent,
    EquityMarketComponent,
    CurrencyMarketComponent,
    DerivativesMarketComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule,
    CarouselModule
  ]
})
export class FrontEndModule { }
