import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: []
})

export class AppComponent {
  title = 'Tianyang Ren';
  employer = 'InterSystems';
  location = 'Cambridge';
  url = {
    employer: 'https://www.intersystems.com/who-we-are/about-us/',
    location: 'https://www.google.com/maps/place/Cambridge,+MA/@42.3784484,-71.1479292,13z',
    resume: 'https://tianyangren.com',
    medium: 'https://medium.com/@tianyangren',
    linkedin: 'https://www.linkedin.com/in/tianyangren/',
    github: 'https://github.com/tianyangren',
    email: 'mailto:hi@tianyangren.com?Subject=Hello',
    soundcloud: 'https://soundcloud.com/tianyangren',
    applemusic: 'https://music.apple.com/profile/tianyangren',
    strava: 'https://www.strava.com/athletes/81324255',
    alltrails: 'https://www.alltrails.com/members/tianyang-ren',
  }


}