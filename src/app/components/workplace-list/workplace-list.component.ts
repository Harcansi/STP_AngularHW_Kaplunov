import { Component, OnInit } from '@angular/core';
import { Workplaces } from './workplaces-list.muck';
import { IWorkplace } from '../../interfaces/workplace';
import { FilterableTableComponent } from '../filterable-table/filterable-table.component';

interface IClassroomOption {
  label: string;
  value: string | null;
}

@Component({
  selector: 'app-workplace-list',
  standalone: true,
  imports: [FilterableTableComponent],
  templateUrl: './workplace-list.component.html',
  styleUrl: './workplace-list.component.css'
})
export class WorkplaceListComponent implements OnInit{
  items: IWorkplace[] = Workplaces;
  displayedColumns: string[] = [
    'placeNumber',
    'placeName',
    'ipAddress',
    'isWork',
    'classroom',
  ];

  classroomOption: IClassroomOption[] = [];

  columnWidths: {[key: string]: string} = {
    placeNumber: '50px',
    placeName: '100px',
    ipAddress: '60px',
    isWork: '80px',
    classroom: '60px',
  };

  headerNames = {
    placeNumber: 'Номер места',
    placeName: 'Имя рабочей станции',
    ipAddress: 'IP-адрес',
    isWork: 'Исправность',
    classroom: 'Класс',
  };

  ngOnInit(): void {
    this.classroomOption = [
      { label: 'Все классы', value: null },
      ...Array.from(new Set(this.items.map(item => item.classroom)))
        .map(dept => ({ label: dept, value: dept }))
    ];
  }

  onFilterChange(filter: any) {}
}
