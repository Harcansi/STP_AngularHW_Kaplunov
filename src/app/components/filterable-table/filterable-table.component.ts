import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-filterable-table',
  standalone: true,
  imports: [CommonModule, PanelModule, TableModule, DropdownModule, FormsModule],
  templateUrl: './filterable-table.component.html',
  styleUrl: './filterable-table.component.css'
})
export class FilterableTableComponent<T extends {[key: string]: any}> {
  @Input() data: T[] = [];
  @Input() columns: string[] = [];
  @Input() columnWidths: {[key: string]: string} = {};
  @Input() headerNames: {[key: string]: string} = {};
  @Input() filterOptions: {label: string, value: any}[] = [];
  @Input() filterColumn: string = '';
  @Input() filterPlaceholder: string = 'Все';
  @Input() selectableData: string | undefined;

  @Output() filterChange = new EventEmitter<any>();

  filteredData: T[] = [];
  selectedFilter: any = null;
  selectedRow!: T;

  ngOnInit() {
    this.filteredData = [...this.data];
  }

  onFilterChange() {
    if (!this.selectedFilter || this.selectedFilter.value === null) {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(
        item => item[this.filterColumn] === this.selectedFilter.value
      );
    }
    this.filterChange.emit(this.selectedFilter);
  }

  getHeaderName(column: string): string {
    return this.headerNames[column] || column;
  }
}
