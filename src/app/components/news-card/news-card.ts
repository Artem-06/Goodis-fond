import { Component, Input } from '@angular/core';
import { INewsItem } from '../../types';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input({ required: true }) data!: INewsItem;
}
