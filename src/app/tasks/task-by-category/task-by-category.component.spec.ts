import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskByCategoryComponent } from './task-by-category.component';

describe('TaskByCategoryComponent', () => {
  let component: TaskByCategoryComponent;
  let fixture: ComponentFixture<TaskByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
