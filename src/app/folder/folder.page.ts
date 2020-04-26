import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sounds } from '../sounds';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public nameIcon: String;
  public playSound: boolean ;
  public reproduciendo: string;
  public playList: Sounds[]  = [
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
  
  sound: Howl = null;
  activeTrack: Sounds = null;

  constructor(private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    //Extrae el parametro de la URL
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.nameIcon = 'play-circle-outline';
    this.playSound = false;
  }

  mute() {
    this.sound.mute(true);
  } 
  
  no_mute() {
    this.sound.mute(false);
  }

  play_music() {

    //Si no esta reproduciendo
    if(!this.playSound) {

      this.playSound = true;

      //Si existe y una cancion y solo esta pausa
      if(this.sound) {
        this.no_mute();

      }else {
        for(let i=0;i< this.playList.length;i++) {
          this.reproduce(i);
          this.sound.on('end', ()=>{
            console.log('Termino la ultima musica ' + i);
          });
        }
        this.sound.play();
      }

    }else {
      this.mute();
      this.nameIcon = 'play-circle-outline';
      this.playSound = false;            
    }
  }

  reproduce(index) {
    this.sound = new Howl({
      src: [this.playList[index].url],
      onplay: ()=> {
        this.reproduciendo = this.playList[index].name + ' - ' + this.playList[index].artist;
        this.nameIcon = 'stop-circle-outline';
        this.playSound = true;
      }
      /*onend: ()=> {
        
        this.nameIcon = 'play-circle-outline';
      }*/
    });
  }

}
