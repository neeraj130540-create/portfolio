import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'home';

  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '#contact' }
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'awards', 'contact'];
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) {
        this.activeSection = id;
        break;
      }
    }
  }

  scrollTo(href: string) {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
