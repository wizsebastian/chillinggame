import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-formal-template',
  templateUrl: './formal-template.component.html',
  styleUrls: ['./formal-template.component.scss']
})
export class FormalTemplateComponent implements OnInit {
  ruta: string = '../formal-template/../../../../../assets/'
  imgType: string = '.png'
  public contact = {
    displayName: 'Indira Jimenez',
    phoneNumbers: [{
      value: '+18092175857',
      type: 'mobile'
    }]
  };
  links : any  = [
    {
      imgName: 'whatsapp.png', 
      text: 'Whatsapp', 
      link: 'https://api.whatsapp.com/message/6WGUWO7VOCDXD1?autoload=1&app_absent=0'
    },
    {
      imgName: 'facebook.png', 
      text: 'Facebook', 
      link: 'https://web.facebook.com/indirajimenez.urbangroup'
    },
    {
      imgName: 'instagram.png', 
      text: 'Instagram', 
      link: 'https://www.instagram.com/indira.blacklionsd/'
    },
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    anime({
      targets: '#animate',
      translateX: 700,
      duration: 100000
    });
  }
  
  


  share() {
    if (navigator.share) {
      navigator.share({
        title: 'Mira mi pass',
        text: 'Aqui puedes ver toda mi informacion de contacto y redes sociales.',
        url: 'https://www.chillinggame.com'
      }).then(() => {
        console.log('Contenido compartido');
      }).catch((error) => {
        console.error('Error al compartir:', error);
      });
    } else {
      console.warn('La API Web Share no está disponible en este dispositivo');
    }
  }

}
