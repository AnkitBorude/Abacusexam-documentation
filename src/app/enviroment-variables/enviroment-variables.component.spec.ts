import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentVariablesComponent } from './enviroment-variables.component';

describe('EnviromentVariablesComponent', () => {
  let component: EnviromentVariablesComponent;
  let fixture: ComponentFixture<EnviromentVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnviromentVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviromentVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
