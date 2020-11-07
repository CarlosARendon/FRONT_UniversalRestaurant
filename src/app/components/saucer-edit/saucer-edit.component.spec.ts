import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaucerEditComponent } from './saucer-edit.component';

describe('SaucerEditComponent', () => {
  let component: SaucerEditComponent;
  let fixture: ComponentFixture<SaucerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaucerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaucerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
