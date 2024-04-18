import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CollegeInfoComponent } from './college-info/college-info.component';

// Services
import { CollegeDataService } from './college-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CollegeInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderComponent,
    HeaderComponent
  ],
  providers: [
    CollegeDataService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
