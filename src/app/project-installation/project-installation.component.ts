import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-installation',
  templateUrl: './project-installation.component.html'
})
export class ProjectInstallationComponent {
  constructor(private route:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.route.fragment.subscribe((fragment)=>{
      console.log(fragment);
      if(fragment)
      {
      let element=document?.getElementById(fragment);
      if(element)
      {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      }
    })
  }
  current = 0;
  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }
}
