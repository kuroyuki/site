import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule, MatIconModule, MatButtonModule
  ],
  exports:[TopMenuComponent]
})
export class TopMenuModule { }
