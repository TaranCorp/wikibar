import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListComponent } from './list/list.component';
import { RemoveHtmlPipe } from './shared/remove-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListComponent,
    RemoveHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
