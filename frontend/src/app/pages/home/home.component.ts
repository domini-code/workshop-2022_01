import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery/services/gallery.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items$ = this.gallerySvc.items$;
  constructor(private readonly gallerySvc: GalleryService) { }

  ngOnInit(): void {
  }



}
