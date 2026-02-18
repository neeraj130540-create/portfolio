import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'neeraj130540@gmail.com',
      href: 'mailto:neeraj130540@gmail.com',
      color: 'cyan'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 8851684343',
      href: 'tel:+918851684343',
      color: 'purple'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Noida, Uttar Pradesh, India',
      href: null,
      color: 'pink'
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
