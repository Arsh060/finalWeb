import { Component, OnInit } from '@angular/core';
import { CollegeDataService } from '../college-data.service';

@Component({
  selector: 'app-college-info',
  templateUrl: './college-info.component.html',
  styleUrls: ['./college-info.component.css']
})
export class CollegeInfoComponent implements OnInit {
  collegeData: any;
  imageUrl = './assets/images/sheridan.png';

  constructor(private collegeDataService: CollegeDataService) { }

  ngOnInit() {
    this.collegeDataService.getCollegeData().subscribe(data => {
      this.collegeData = data;
    });
  }
}
