import { Injectable, signal } from '@angular/core';
import { INewsItem } from '../types';

@Injectable({ providedIn: 'root' })
export class NewsService {
  selectedNews = signal<INewsItem | null>(null);

  private newsDatabase: Record<string, INewsItem> = {
    'news-1': {
      id: 'news-1',
      title: 'Різдвяні колядки...',
      image: 'images/news/Miku%2010th%20Anni.jpg',
      paragraphs: ['Текст новини...'],
      video: 'https://youtu.be/...',
    },

    'news-2': {
      id: 'news-2',
      title: 'Різдвяні колядки...',
      image: 'images/news/Міку%20-%20ноунеймний%20арт.webp',
      paragraphs: ['Текст новини...'],
      video: 'https://youtu.be/...',
    },
    'news-3': {
      id: 'news-3',
      title: 'Різдвяні колядки...',
      image: 'images/news/Міку%20-%20рукасте%20волосся.webp',
      paragraphs: ['Текст новини...'],
      video: 'https://youtu.be/...',
    },
  };

  openModal(item: INewsItem) {
    this.selectedNews.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedNews.set(null);
    document.body.style.overflow = 'auto';
  }

  getAllNews(): INewsItem[] {
    return Object.values(this.newsDatabase);
  }

  getNewsById(id: string): INewsItem | undefined {
    return this.newsDatabase[id];
  }
}
