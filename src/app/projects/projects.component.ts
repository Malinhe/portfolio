import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      img: 'elPolloLoco.png',
      name: 'El pollo loco',
      languages: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins, hearts and salsa-bottles bottles to fight against the big chicken.',
      liveTest: 'ElPolloLoco',
      github: 'El-Pollo-Loco'
    },

    {
      img: 'join.png',
      name: 'Join',
      languages: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categorys.',
      liveTest: 'JOIN-V3',
      github: 'JOIN-V3'
    },

    // {
    //   img: 'ringOfFire.png',
    //   name: 'Ring of fire',
    //   languages: 'Angular | TypeScript | Firebase | HTML | SCSS',
    //   description: 'The well-known card drinking game.',
    //   liveTest: 'Ring of fire',
    //   github: 'ringoffire'
    // }

  ];
}
