import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { AutorizarComponent } from './components/autorizar/autorizar.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule,
    RouterModule,
    ReactiveFormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
