import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { VCard } from "ngx-vcard";


@Component({
  selector: 'app-formal-template',
  templateUrl: './formal-template.component.html',
  styleUrls: ['./formal-template.component.scss']
})
export class FormalTemplateComponent implements OnInit {
  public vCard: VCard = {
    name: {
      firstNames: "Indira",
      lastNames: "Jimenez",
    },
    telephone: [{
      value: "+18092175857",
      param: {type: 'work'},
    }], 
    email: [{
      value: "indira.jimenezmetz@gmail.com",
      param: {type: 'work'},
    }]
  };
  public generateVCardOnTheFly = (): VCard => {
    // TODO: Generate the VCard before Download
    return {
      name: { firstNames: "Indira", lastNames: "Jimenez", addtionalNames: "Auto" },
    };
  };

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
  
  // descargarContacto() {
  //   // Crea un nuevo objeto vCard
  //   const vcard = new VCard();
  
  //   // Agrega la información del contacto
  //   vcard.addName('Apellido', 'Nombre');
  //   vcard.addEmail('correo@ejemplo.com');
  //   vcard.addPhoneNumber('1234567890');
  //   vcard.addAddress('', '', 'Calle 123', '', 'Ciudad', 'Estado', 'Código postal', 'País');
  
  //   // Genera el archivo vCard y lo descarga
  //   const blob = new Blob([vcard.getFormattedString()], { type: 'text/vcard;charset=utf-8;' });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'contacto.vcf';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // }
  
  


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
