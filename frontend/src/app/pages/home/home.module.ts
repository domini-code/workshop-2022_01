import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { GalleryCardComponent } from '@app/pages/home/Components/gallery-card/gallery-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [GalleryCardComponent, HomePageComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
