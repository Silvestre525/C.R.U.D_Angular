import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-place-holder.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newPost: any = {
    title: '',
    body: ''
  };

  constructor(private jsonService: JsonPlaceholderService) {}

  onSubmit(): void {
    this.jsonService.createPost(this.newPost).subscribe(
      (response: any) => {
        console.log('Post creado:', response);
        // Realizar acciones adicionales después de crear el post (redireccionar, mostrar mensaje, etc.)
      },
      (error: any) => {
        console.error('Error al crear el post:', error);
        // Manejar errores en caso de que falle la creación del post
      }
    );
  }
}
