import { Routes } from '@angular/router';
import { ClassRoomListComponent } from './components/classroom-list/classroom-list.component';
import { WorkplaceListComponent } from './components/workplace-list/workplace-list.component';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/class-rooms',
        pathMatch: 'full',
        title: 'Обслуживание рабочих мест',
    },
    {
        path: 'class-rooms',
        title: 'Учебные классы - Обслуживание рабочих мест',
        component: ClassRoomListComponent,
    },
    {
        path: 'workplaces',
        title: 'Учебные места',
        component: WorkplaceListComponent,
    },
    {
        path: 'equipments',
        title: 'Оборудование',
        component: EquipmentListComponent,
    },
    {
        path: 'students',
        title: 'Студенты',
        component: StudentListComponent,
    },
];
