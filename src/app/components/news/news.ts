import { Component, inject, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { NewsCard } from '../news-card/news-card';
import { NewsService } from '../../services/news';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsCard],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News implements AfterViewInit {
  public newsService = inject(NewsService);

  ngAfterViewInit() {
    const splide = new Splide('#news', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      pagination: false,
      gap: '20px',
      breakpoints: {
        768: { perPage: 1 },
      },
    }).mount();

    splide.on('click', (slideComponent) => {
      const allNews = this.newsService.getAllNews();

      const realIndex = slideComponent.index % allNews.length;

      const selectedItem = allNews[realIndex];

      if (selectedItem) {
        this.newsService.openModal(selectedItem);
      }
    });
  }
}
