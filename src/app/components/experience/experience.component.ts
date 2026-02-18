import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  experiences = [
    {
      company: 'Instant Systems Inc.',
      role: 'Senior Software Engineer',
      period: 'Sep 2024 – Present',
      location: 'Noida, Uttar Pradesh',
      color: 'cyan',
      current: true,
      highlights: [
        'Collaborated with stakeholders to gather requirements and ensure smooth project execution',
        'Redesigned web applications to improve user experience and engagement',
        'Mentored junior developers, conducted knowledge-sharing sessions, and improved team workflow',
        'Implemented best practices to reduce website load times and enhance responsiveness',
        'Integrated authentication and role-based access control to enhance application security',
        'Utilized automated and manual testing methods to ensure bug-free deployments'
      ]
    },
    {
      company: 'KiwiTech',
      role: 'Software Engineer',
      period: 'March 2022 – Sep 2024',
      location: 'Noida, Uttar Pradesh',
      color: 'purple',
      current: false,
      highlights: [
        'Direct interaction with client, delivering visually appealing web apps with attractive UI — completed 70% of work in 1 month',
        'Proficiency in Angular for building dynamic and feature-rich user interfaces',
        'Shared frontend framework expertise with UI design team, leading to a 40% boost in team productivity',
        'Guided senior team, facilitating smooth collaboration, improved efficiency by 30%',
        'Implemented optimizations to enhance page load times and overall site performance',
        'Utilized Bootstrap to streamline UI development and ensure consistency'
      ]
    },
    {
      company: 'C.P Rawat Softwares',
      role: 'Front End Developer Intern',
      period: 'May 2021 – Feb 2022',
      location: 'Agra, Uttar Pradesh',
      color: 'pink',
      current: false,
      highlights: [
        'Assisted in development of the front end of a Web application',
        'Worked with Google Firebase to manage user inputted data across web and mobile platforms',
        'Collaborated with team members using Git for version control and task management',
        'Created responsive web applications from scratch'
      ]
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.animEls.forEach(el => observer.observe(el.nativeElement));
  }
}
