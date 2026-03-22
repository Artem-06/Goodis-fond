import { Component, inject, Input } from '@angular/core';
import { INewsItem } from '../../types';
import { DatePipe } from '@angular/common';
import { NewsService } from '../../services/news';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  public newsService = inject(NewsService);
  @Input({ required: true }) data!: INewsItem;
}
