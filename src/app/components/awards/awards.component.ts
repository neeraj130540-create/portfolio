import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  awards = [
    {
      title: 'Employee of the Month',
      date: 'July 2023',
      icon: '🏆',
      color: 'gold',
      description: 'Received for successfully converting the entire web application into a fully responsive web application, demonstrating exceptional technical skill and dedication.',
      highlights: ['Managed a team of 5 members', 'Ran weekly progress meetings', 'Delivered complete responsive redesign']
    },
    {
      title: 'Spot Recognition Award',
      date: 'August 2022',
      icon: '⚡',
      color: 'cyan',
      description: 'Received for delivering features to the client ahead of the estimated timeline, showcasing efficiency, commitment, and ability to excel under pressure.',
      highlights: ['Delivered before deadline', 'Exceeded client expectations', 'Recognized for outstanding performance']
    }
  ];

  education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'H.R Institute of Technology',
      period: 'Sep 2018 – July 2022',
      location: 'Ghaziabad, Uttar Pradesh',
      icon: '🎓'
    },
    {
      degree: 'Senior Secondary Education in Science',
      institution: 'Indraprastha Public School',
      period: 'April 2017 – May 2018',
      location: 'Ghaziabad, Uttar Pradesh',
      icon: '📚'
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    this.animEls.forEach(el => observer.observe(el.nativeElement));
  }
}
