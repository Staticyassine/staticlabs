import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.song = "../assets/audio/testLoop.mp3"
  }
  title = 'portfolio';

  playinState = true
  songs = ["../assets/audio/testLoop.mp3", "../assets/audio/10s.mp3", "../assets/audio/kill4me.mp3"]
  song = ""
  play() {
    this.playinState = true
  }
  pause() {
    this.playinState = false
  }
  nextSong() {
    this.song = this.songs[this.getRandomInt(this.songs.length)]
  }
  getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }
  incrementSong(max: any) {
    let i = 0
    if (i != max) {
      while (i <= max) {
        return i
      }
      i = i + 1
    }
    else {
      i = 0
      return i
    }
    return i
  }
}
