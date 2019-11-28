import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';

//material imports
import {DemoMaterialModule} from './material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectionComponent } from './components/selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HeaderNavComponent]
})
export class AppModule { }
