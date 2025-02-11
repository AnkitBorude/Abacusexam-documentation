import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInstallationDockerComponent } from './project-installation-docker.component';

describe('ProjectInstallationDockerComponent', () => {
  let component: ProjectInstallationDockerComponent;
  let fixture: ComponentFixture<ProjectInstallationDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectInstallationDockerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInstallationDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
