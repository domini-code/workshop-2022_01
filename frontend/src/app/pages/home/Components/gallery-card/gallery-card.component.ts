import { Component, Input } from '@angular/core';
import { Items } from '../../interface/itmes.interface';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss'],
})
export class GalleryCardComponent {
  @Input() item!: Items;
  constructor() {}
}
