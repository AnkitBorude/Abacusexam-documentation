import { Component } from '@angular/core';

@Component({
  selector: 'app-project-installation',
  templateUrl: './project-installation.component.html',
  styleUrl: './project-installation.component.css'
})
export class ProjectInstallationComponent {
  current = 0;
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }
}
