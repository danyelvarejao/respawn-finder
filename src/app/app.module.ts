import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { RespawnsComponent } from './components/respawns/respawns.component';
import { ItemsComponent } from './components/items/items.component';
import { AnalyzerComponent } from './components/analyzer/analyzer.component';

import { FormatSecondsPipe } from './pipes/format-seconds.pipe';
import { FormatMoneyPipe } from './pipes/format-money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RespawnsComponent,
    ItemsComponent,
    AnalyzerComponent,
    FormatSecondsPipe,
    FormatMoneyPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
