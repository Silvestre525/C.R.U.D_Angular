import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from './services/json-place-holder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  placeHolder: any = {};

  constructor(private service: JsonPlaceholderService) {}

  /* Get */
  ngOnInit(): void {
    this.service.getAllJsonPlaceholder().subscribe((placeHolder2: any) => {
      this.placeHolder = placeHolder2.result;
      console.log(this.placeHolder);
    });
  }
}
