import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StyleComponent } from './module/style/style.component';
import { FilsComponent } from './module/fils/fils.component';
import { PereComponent } from './module/pere/pere.component';
import { FormsModule, NgModel } from '@angular/forms';
import { HightlightDirective } from './directive/hightlight.directive';
import { RaindbowDirective } from './directive/raindbow.directive';
import { TestComponent } from './presentation/test/test.component';
import { TestFilsComponent } from './presentation/test-fils/test-fils.component';
import { ListeComponent } from './liste/liste.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
import { DetailComponent } from './presentation/detail/detail.component';
import { LocalhostComponent } from './localhost/localhost.component';
import { TexteComponent } from './texte/texte.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    FilsComponent,
    PereComponent,
    HightlightDirective,
    RaindbowDirective,
    TestComponent,
    TestFilsComponent,
    ListeComponent,
    HeaderComponent,
    TestRoutingComponent,
    DetailComponent,
    LocalhostComponent,
    TexteComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
