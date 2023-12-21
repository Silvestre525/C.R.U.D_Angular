import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-place-holder.service';

/* Aca es donde va implementada la logica del frontend y en donde trabajamos con los endpoints que recibimos del backend */
@Component({
  selector: 'app-lista-posts',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListaPostsComponent implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  searchText = '';
   p: number = 1; 
  

  constructor(private jsonService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.jsonService.getAllJsonPlaceholder().subscribe((data: any[]) => {
      this.posts = data;
      this.filteredPosts = this.posts;
    });
  }

  filterPosts(): void {
    if (this.searchText) {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.p = 1; // Resetear la página a la primera al realizar una nueva búsqueda
    } else {
      this.filteredPosts = this.posts;
    }
  }
  
}
