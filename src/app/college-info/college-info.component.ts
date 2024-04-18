import { Component, OnInit } from '@angular/core';
import { CollegeDataService } from '../college-data.service';

@Component({
  selector: 'app-college-info',
  templateUrl: './college-info.component.html',
  styleUrls: ['./college-info.component.css']
})
export class CollegeInfoComponent implements OnInit {
  collegeData: any = {
    name: 'Default College Name',
    type: 'N/A',
    established: 'N/A',
    location: 'N/A',
    students: {fullTime: 'N/A', partTime: 'N/A'},
    image: 'sheridan.png'
  };
  imageUrl = 'assets/images/';

  constructor(private collegeDataService: CollegeDataService) { }

  ngOnInit() {
    this.collegeDataService.getCollegeData().subscribe(data => {
      this.collegeData = {...this.collegeData, ...data};
    });
  }
}
