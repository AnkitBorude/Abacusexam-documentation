import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointinfoComponent } from './endpointinfo.component';

describe('EndpointinfoComponent', () => {
  let component: EndpointinfoComponent;
  let fixture: ComponentFixture<EndpointinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndpointinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndpointinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
