import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from './services/news';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { News } from './components/news/news';
import { Footer } from './components/footer/footer';
import { NewsModal } from './components/news-modal/news-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Footer, About, News, NewsModal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private newsService = inject(NewsService);
  newsList = this.newsService.getAllNews();
}
