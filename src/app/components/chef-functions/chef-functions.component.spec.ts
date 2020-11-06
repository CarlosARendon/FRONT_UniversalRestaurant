import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefFunctionsComponent } from './chef-functions.component';

describe('ChefFunctionsComponent', () => {
  let component: ChefFunctionsComponent;
  let fixture: ComponentFixture<ChefFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
