import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonPlaceholderService } from '../../services/json-place-holder.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newPostForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jsonService: JsonPlaceholderService
  ) {}

  ngOnInit(): void {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.newPostForm.valid) {
      const newPostData = this.newPostForm.value;

      this.jsonService.createPost(newPostData).subscribe(
        (response: any) => {
          console.log('Post creado:', response);
          // Realizar acciones después de crear el post (redireccionar, mostrar mensaje)
        },
        (error: any) => {
          console.error('Error al crear el post:', error);
          // Manejar errores en caso de que falle la creación del post
        }
      );
    } else {
      // Marcar los campos como "touched" para mostrar los mensajes de error
      Object.values(this.newPostForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  get formControls() {
    return this.newPostForm.controls;
  }
}
