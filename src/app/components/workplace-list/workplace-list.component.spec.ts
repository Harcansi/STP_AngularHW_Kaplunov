import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceListComponent } from './workplace-list.component';

describe('WorkplaceListComponent', () => {
  let component: WorkplaceListComponent;
  let fixture: ComponentFixture<WorkplaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkplaceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkplaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
