import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fund_good_is',
      icon: 'images/icons/Instagram_icon.svg',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/17VuKGJmJ3',
      icon: 'images/icons/Facebook_icon.svg',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@fund.good.is',
      icon: 'images/icons/TikTok_icon.svg',
    },
  ];
  currentYear = new Date().getFullYear();
}
