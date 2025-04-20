import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { IStudent } from '../../interfaces/student';
import { Students } from './student-list.muck';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [TableModule, PanelModule, CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  items: IStudent[] = Students;

  selectedRow: IStudent | undefined;
  selectableData: string = 'equipmentID';

  columns: string[] = [
    'name',
    'seat',
    'equipmentName',
    'equipmentID',
    'ipAddress',
  ]

  columnWidths: {[key: string]: string} = {
    name: '100px',
    seat: '70px',
    equipmentName: '120px', 
    equipmentID: '80px',
    ipAddress: '50px' 
  }

  headerNames: {[key: string]: string} = {
    name: 'Имя студента',
    seat: 'Место',
    equipmentName: 'Наименвание оборудования', 
    equipmentID: 'Инвентарный номер',
    ipAddress: 'IP-адрес' 
  }


  ngOnInit(): void {

  }

  getHeaderName(column: string): string {
    return this.headerNames[column] || column;
  }
}
