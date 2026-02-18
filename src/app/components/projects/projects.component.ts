import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  projects = [
    {
      name: 'Clove Dental PRM',
      period: 'Sep 2024 – Present',
      color: 'cyan',
      icon: '🦷',
      description: 'Patient Relationship Management system for Clove Dental, focusing on patient tracking and workflow automation across dental treatments.',
      tech: ['Angular', 'PrimeNG', 'TypeScript', 'Bootstrap', 'RxJS', 'AWS', 'REST API'],
      highlights: [
        'Designed comprehensive workflow module managing different treatment stages',
        'Integrated real-time patient tracking for aligners, implants, and other procedures',
        'Developed advanced appointment scheduling system to optimize patient visits',
        'Implemented role-based access control for dentists, staff, and administrators',
        'Automated patient reminders and notifications for appointments and follow-ups',
        'Connected PRM with third-party dental labs and payment gateways'
      ]
    },
    {
      name: 'Mogul Talent Engine',
      period: 'Dec 2023 – Sep 2024',
      color: 'purple',
      icon: '💼',
      description: 'Job portal platform for job seekers, recruiters, and employers with advanced search and profile management features.',
      tech: ['Angular', 'TypeScript', 'Bootstrap', 'RxJS', 'AWS', 'REST API'],
      highlights: [
        'Spearheaded frontend development, creating user-friendly interfaces for all user roles',
        'Developed advanced job search with filters for location, industry, job type, and keywords',
        'Implemented secure user authentication and authorization mechanisms',
        'Designed profile management with resume creation and job preference settings',
        'Orchestrated job application workflow including status tracking and notifications',
        'Optimized performance with lazy loading and code splitting'
      ]
    },
    {
      name: 'TopFans',
      period: 'Oct 2023 – Jan 2024',
      color: 'pink',
      icon: '⭐',
      description: 'Content creator platform with reactive forms, reusable Angular components, and seamless backend API integration.',
      tech: ['Angular', 'Angular Material', 'TypeScript', 'Bootstrap', 'RxJS', 'AWS'],
      highlights: [
        'Implemented reactive forms with comprehensive validation logic',
        'Created reusable and modular Angular components for scalability',
        'Integrated frontend components with backend APIs for data manipulation',
        'Implemented client-side routing and navigation using Angular Router',
        'Ensured cross-browser compatibility through thorough testing and debugging'
      ]
    },
    {
      name: 'BST-Perform',
      period: 'March 2022 – Present',
      color: 'green',
      icon: '📊',
      description: 'Performance management web application with dynamic data tables, reactive forms, auth guards, and PDF export functionality.',
      tech: ['Angular', 'Angular Material', 'TypeScript', 'Bootstrap', 'RxJS', 'AWS'],
      highlights: [
        'Implemented dynamic table with advanced filtering and sorting capabilities',
        'Built reactive forms with comprehensive validation',
        'Converted the entire web application to a fully responsive design',
        'Implemented AuthGuards for route protection and security',
        'Developed HTML page to PDF export functionality'
      ]
    },
    {
      name: 'SmartEduTech ERP',
      period: 'Nov 2021 – Feb 2022',
      color: 'orange',
      icon: '🎓',
      description: 'Education ERP system with login, social authentication, and a comprehensive dashboard for educational management.',
      tech: ['Angular', 'Angular Material', 'TypeScript', 'Bootstrap', 'RxJS'],
      highlights: [
        'Built complete login page with form validation',
        'Implemented social login integration (Google/Facebook)',
        'Designed and developed interactive dashboard page',
        'Collaborated with team using Git for version control'
      ]
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    this.animEls.forEach(el => observer.observe(el.nativeElement));
  }
}
