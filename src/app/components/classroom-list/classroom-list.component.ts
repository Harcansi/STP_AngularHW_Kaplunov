import { Component, OnInit } from '@angular/core';
import { IClassroom } from '../../interfaces/classroom';
import { Classrooms } from './classroom-list.muck';
import { FilterableTableComponent } from '../filterable-table/filterable-table.component';

interface IDepartmentOption {
  label: string;
  value: string | null;
}

@Component({
  selector: 'app-classroom-list',
  standalone: true,
  imports: [FilterableTableComponent],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css',
})
export class ClassRoomListComponent implements OnInit {
  items: IClassroom[] = Classrooms;
  displayedColumns: string[] = [
    'address', 
    'phone', 
    'maxSeats', 
    'actualSeats', 
    'workableSeats', 
    'departmentName'
  ];

  departmentOptions: IDepartmentOption[] = [];

  columnWidths: {[key: string]: string} = {
    address: '250px',
    phone: '150px',
    maxSeats: '100px',
    actualSeats: '100px',
    workableSeats: '120px',
    departmentName: '200px'
  };

  headerNames = {
    address: 'Адрес',
    phone: 'Телефон',
    maxSeats: 'Макс. мест',
    actualSeats: 'Факт. мест',
    workableSeats: 'Рабочих мест',
    departmentName: 'Ответственная кафедра'
  };

  ngOnInit(): void {
    this.departmentOptions = [
      { label: 'Все кафедры', value: null },
      ...Array.from(new Set(this.items.map(item => item.departmentName)))
        .map(dept => ({ label: dept, value: dept }))
    ];
  }

  onFilterChange(filter: any) {}
}
