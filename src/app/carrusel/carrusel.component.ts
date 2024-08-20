import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images: string[] = [
    'img1.jpeg', // Cambia estas rutas por las de tus imágenes
    'img2.jpeg',
    'img3.jpeg'
  ];

  currentIndex: number = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
