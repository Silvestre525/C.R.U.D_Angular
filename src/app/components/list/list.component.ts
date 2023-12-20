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
  p: number = 1; // Página actual, inicializada en 1

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
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
