import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../services/json-place-holder.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListaPostsComponent implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  searchText = '';
   p: number = 1; // Inicializando la propiedad 'p' con valor 1
  

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
