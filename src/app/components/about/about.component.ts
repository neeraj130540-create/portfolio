import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('animEl') animEls!: QueryList<ElementRef>;

  stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '3', label: 'Companies' },
    { value: '2', label: 'Awards Won' }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    this.animEls.forEach(el => observer.observe(el.nativeElement));
  }
}
