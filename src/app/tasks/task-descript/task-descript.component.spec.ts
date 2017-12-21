import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDescriptComponent } from './task-descript.component';

describe('TaskDescriptComponent', () => {
  let component: TaskDescriptComponent;
  let fixture: ComponentFixture<TaskDescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
