import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sounds } from '../sounds';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public nameIcon: String;
  public playSound: boolean;
  public reproduciendo: string;
  public playList: Sounds[] = [
    {
      id: 1,
      name: 'Si no llenamos la Tierra',
      artist: 'Santiago Benavides',
      url: './assets/canciones/Santiago_Benavides1.mp3',
      duracion: '4:32'
    },
    {
      id: 2,
      name: 'Aprovecha',
      artist: 'Santiago Benavides',
      url: './assets/canciones/Santiago_Benavides2.mp3',
      duracion: '4:32'
    },
    {
      id: 3,
      name: 'Nokia 1',
      artist: 'Tonos Nokia',
      url: './assets/canciones/nokia1.mp3',
      duracion: '4:32'
    },
    {
      id: 4,
      name: 'Nokia 2',
      artist: 'Tonos Nokia',
      url: './assets/canciones/nokia2.mp3',
      duracion: '4:32'
    }

  ];

  // sound: Howl = null;
  activeTrack: Sounds = null;
  sound: any;
  volumen: number;
  // sound.src = ;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Extrae el parametro de la URL
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.nameIcon = 'play-circle-outline';
    this.playSound = false;
    this.sound = new Audio();
    this.volumen = 50;
    this.sound.volume = (this.volumen / 100);
  }
  // this.nameIcon = 'stop-circle-outline';

  // this.nameIcon = 'play-circle-outline';

  play_music() {
    this.sound.src = "assets/canciones/Santiago_Benavides1.mp3";
    this.sound.currentTime = 70;

    this.sound.play();
    console.log('El nombre del icono es ' + this.nameIcon);
  }

  set_volumen(event) {
    console.log(event.detail.value);
    this.volumen = event.detail.value;
    this.sound.volume = (this.volumen / 100);
  }

}
