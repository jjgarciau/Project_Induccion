import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images: string[] = [
    'img1.jpg', // Cambia estas rutas por las de tus imágenes
    'img2.jpeg',
    'Img3.jpeg',
  ];

  descripcion: string[] = [
    'Con prosperidad',
    'Con honor',
    'Con un buen ambiente',
  ];

  currentIndex: number = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
