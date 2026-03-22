export interface INewsItem {
  id: number;
  title: string;
  date: Date;
  image: string;
  video?: string;
  externalUrl?: string;
  actionUrl?: string;
  actionLabel?: string;
  paragraphs: string[];
}
