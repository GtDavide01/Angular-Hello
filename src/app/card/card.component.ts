import { Component , OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  restaurants : any=[] ; 
  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe((response:any) => {
          this.restaurants = response.array;
          console.log(this.restaurants);
        });
  }
} 
