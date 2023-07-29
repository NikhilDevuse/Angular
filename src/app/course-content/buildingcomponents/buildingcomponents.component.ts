import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildingcomponents',
  templateUrl: './buildingcomponents.component.html',
  styleUrls: ['./buildingcomponents.component.css']
})
export class BuildingcomponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/Images/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/Images/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/Images/biking.jpeg',
      username: 'david12222',
      content: 'I did some biking today',
    },
    {
      title: 'Mountain',
      imageUrl: 'https://th.bing.com/th/id/R.7ad59abe9def20772a3d4c8af5b6697b?rik=5%2bpRSbeR8kMdaw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f02%2f18%2f290843-mountain-lake-forest.jpg&ehk=Z%2bMO3dJY55GYXvgPWd%2blXHjTSuoJQUj5S%2b1Wzq9CK7M%3d&risl=&pid=ImgRaw&r=0',
      username: 'biking12222',
      content: 'I Love this scenery',
    }
  ];

}
