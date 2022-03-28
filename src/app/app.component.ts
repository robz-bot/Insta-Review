import { Component } from '@angular/core';
import { insta } from './insta-model';
import { InstaServiceService } from './Services/insta-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'insta-preview';

  constructor(private instaService: InstaServiceService) {}

  ngOnInit(): void {
    this.getRecords();
  }

  profileList: insta[] = [];
  getRecords() {
    this.instaService.getAllInstaReviews().subscribe((data) => {
      console.log(data);
      this.profileList = data;
      this.profileList.sort((a, b) => {
        var x = a.likes;
        var y = b.likes;
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    });
  }
  singlePreview: insta = new insta();
  showRightPreview: number = 0;
  showPreview(item: insta) {
    this.showRightPreview = 1;
    this.singlePreview = item;
  }

  increaseLike(item: insta) {
    this.singlePreview.likes = item.likes + 1;
  }
}
