import { Component, inject } from '@angular/core';
import { NewsService } from '../../services/news';

@Component({
  selector: 'app-news-modal',
  standalone: true,
  templateUrl: './news-modal.html',
  styleUrl: './news-modal.css',
})
export class NewsModal {
  public newsService = inject(NewsService);
}
