import { Component } from '@angular/core';

@Component({
  selector: 'app-project-installation-docker',
  templateUrl: './project-installation-docker.component.html',
  styleUrl: './project-installation-docker.component.css'
})
export class ProjectInstallationDockerComponent {
  current = 0;
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }
}
