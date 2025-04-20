import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, Menu, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Обслуживание рабочих мест',
        items: [
          {
            label: 'Учебные классы',
            icon: 'pi pi-building',
            url: '/class-rooms',
          },
          {
            label: 'Рабочие места',
            icon: 'pi pi-desktop',
            url: '/workplaces',
          },
          {
            label: 'Оборудование',
            icon: 'pi pi-server',
            url: '/equipments',
          },
          {
            label: 'Студенты',
            icon: 'pi pi-user',
            url: '/students',
          },
        ]
      }
    ];
  }
}
