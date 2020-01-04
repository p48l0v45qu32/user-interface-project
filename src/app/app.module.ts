import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
//material imports
import {DemoMaterialModule} from './material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionComponent } from './components/selection/selection.component';
import { LigneSelectComponent } from './components/ligne-select/ligne-select.component';
import { FAQComponent } from './components/faq/faq.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    SelectionComponent,
    LigneSelectComponent,
    FAQComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HeaderNavComponent, FooterComponent]
})
export class AppModule { }
