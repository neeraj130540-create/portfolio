import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  titles = ['Senior Software Engineer', 'Angular Specialist', 'Frontend Architect', 'UI/UX Enthusiast'];
  currentTitle = '';
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timer: any;

  ngOnInit() {
    this.typeWriter();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  typeWriter() {
    const full = this.titles[this.currentIndex];
    if (this.isDeleting) {
      this.currentTitle = full.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentTitle = full.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === full.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      speed = 400;
    }

    this.timer = setTimeout(() => this.typeWriter(), speed);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
