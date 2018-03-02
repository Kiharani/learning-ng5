import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  	this.route.params.subscribe(res => console.log(res.id));
  	// itemCount: number = res.id;
  }

  ngOnInit() {
  }

  backHome(){
  	this.router.navigate(['']);
  }

}
