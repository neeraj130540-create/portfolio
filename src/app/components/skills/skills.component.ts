import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  skillCategories = [
    {
      icon: '⟨/⟩',
      title: 'Languages',
      color: 'cyan',
      skills: ['JavaScript', 'ES6+', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      icon: '◈',
      title: 'Frameworks & Libraries',
      color: 'purple',
      skills: ['Angular 9+', 'PrimeNG', 'Angular Material', 'TailwindCSS', 'Bootstrap', 'RxJS', 'SSR']
    },
    {
      icon: '⚙',
      title: 'Developer Tools',
      color: 'pink',
      skills: ['VS Code', 'Git & GitHub', 'JIRA', 'Agile/Scrum', 'Sublime Text']
    },
    {
      icon: '☁',
      title: 'Cloud & Others',
      color: 'green',
      skills: ['Amazon Web Services', 'Firebase', 'REST APIs', 'JSON', 'Role-Based Access Control']
    }
  ];

  proficiencies = [
    { name: 'Angular', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript / ES6+', level: 92 },
    { name: 'HTML & CSS / SCSS', level: 95 },
    { name: 'RxJS', level: 85 },
    { name: 'PrimeNG / Angular Material', level: 88 },
    { name: 'Bootstrap / TailwindCSS', level: 85 },
    { name: 'AWS', level: 70 }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    this.animEls.forEach(el => observer.observe(el.nativeElement));
  }
}
