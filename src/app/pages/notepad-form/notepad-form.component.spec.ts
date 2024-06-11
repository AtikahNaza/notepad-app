import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadFormComponent } from './notepad-form.component';

describe('NotepadFormComponent', () => {
  let component: NotepadFormComponent;
  let fixture: ComponentFixture<NotepadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotepadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotepadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
