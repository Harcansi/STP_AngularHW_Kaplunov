import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { IEquipment } from '../../interfaces/equipment';
import { Equipments } from './equipment-list.muck';

@Component({
  selector: 'app-equipment-list',
  standalone: true,
  imports: [CommonModule, TableModule, PanelModule],
  templateUrl: './equipment-list.component.html',
  styleUrl: './equipment-list.component.css'
})
export class EquipmentListComponent implements OnInit {
  items: IEquipment[] = Equipments;
  selectedRow: IEquipment | undefined;
  selectableData: string = 'inventoryNumber';

  columns: string[] = [
    'inventoryNumber',
    'type',
    'specification',
    'isWork',
    'classroom',
  ]

  columnWidths: {[key: string]: string} = {
    inventoryNumber: '100px',
    type: '100px',
    specification: '150px', 
    isWork: '100px',
    classroom: '50px' 
  }

  headerNames: {[key: string]: string} = {
    inventoryNumber: 'Инвентарный номер',
    type: 'Тип',
    specification: 'Характеристика', 
    isWork: 'Исправлен?',
    classroom: 'Кабинет' 
  }

  ngOnInit(): void {

  }

  getHeaderName(column: string): string {
    return this.headerNames[column] || column;
  }
}
