import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInstallationComponent } from './project-installation.component';

describe('ProjectInstallationComponent', () => {
  let component: ProjectInstallationComponent;
  let fixture: ComponentFixture<ProjectInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectInstallationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
