import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-gallery-card',
  template: `
  <div class="card">
  <img [src]="item.imageUrl" class="card-img-top" alt="image" />
  <div class="card-body">
    <h5 class="card-title">{{ item.title }}</h5>
  </div>
  </div>`,
  styleUrls: ['./gallery-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryCardComponent {
  @Input() item!: Item;
}
