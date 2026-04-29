import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  MOCK_PRODUCTS: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      category: 'Electronics',
      rating: 4.5,
      image: 'https://picsum.photos/seed/headphones/400'
    },
    {
      id: 2,
      name: 'Running Shoes',
      price: 79.99,
      category: 'Sportswear',
      rating: 4.2,
      image: 'https://picsum.photos/seed/shoes/400'
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 149.99,
      category: 'Electronics',
      rating: 4.7,
      image: 'https://picsum.photos/seed/smartwatch/400'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 59.99,
      category: 'Electronics',
      rating: 4.1,
      image: 'https://picsum.photos/seed/speaker/400'
    },
    {
      id: 5,
      name: 'Yoga Mat',
      price: 29.99,
      category: 'Sportswear',
      rating: 4.0,
      image: 'https://picsum.photos/seed/yogamat/400'
    },
    {
      id: 6,
      name: 'Sunglasses',
      price: 19.99,
      category: 'Accessories',
      rating: 3.8,
      image: 'https://picsum.photos/seed/sunglasses/400'
    },
    {
      id: 7,
      name: 'Laptop Backpack',
      price: 49.99,
      category: 'Accessories',
      rating: 4.3,
      image: 'https://picsum.photos/seed/backpack/400'
    },
    {
      id: 8,
      name: 'Fitness Tracker',
      price: 89.99,
      category: 'Electronics',
      rating: 4.4,
      image: 'https://picsum.photos/seed/fitnesstracker/400'
    },
    {
      id: 9,
      name: 'Basketball',
      price: 24.99,
      category: 'Sportswear',
      rating: 4.1,
      image: 'https://picsum.photos/seed/basketball/400'
    },
    {
      id: 10,
      name: 'Leather Wallet',
      price: 39.99,
      category: 'Accessories',
      rating: 4.6,
      image: 'https://picsum.photos/seed/wallet/400'
    },
    {
      id: 11,
      name: 'Gaming Mouse',
      price: 49.99,
      category: 'Electronics',
      rating: 4.8,
      image: 'https://picsum.photos/seed/mouse/400'
    },
    {
      id: 12,
      name: 'Water Bottle',
      price: 14.99,
      category: 'Accessories',
      rating: 3.9,
      image: 'https://picsum.photos/seed/waterbottle/400'
    },
    {
      id: 13,
      name: 'Hiking Boots',
      price: 129.99,
      category: 'Sportswear',
      rating: 4.5,
      image: 'https://picsum.photos/seed/hikingboots/400'
    },
    {
      id: 14,
      name: 'Portable Charger',
      price: 34.99,
      category: 'Electronics',
      rating: 4.2,
      image: 'https://picsum.photos/seed/charger/400'
    },
    {
      id: 15,
      name: 'Baseball Cap',
      price: 12.99,
      category: 'Accessories',
      rating: 4.0,
      image: 'https://picsum.photos/seed/cap/400'
    },
    {
      id: 16,
      name: 'Wireless Keyboard',
      price: 69.99,
      category: 'Electronics',
      rating: 4.3,
      image: 'https://picsum.photos/seed/keyboard/400'
    },
    {
      id: 17,
      name: 'Gym Shorts',
      price: 24.99,
      category: 'Sportswear',
      rating: 4.1,
      image: 'https://picsum.photos/seed/shorts/400'
    },
    {
      id: 18,
      name: 'Travel Duffel Bag',
      price: 59.99,
      category: 'Accessories',
      rating: 4.4,
      image: 'https://picsum.photos/seed/duffel/400'
    },
    {
      id: 19,
      name: 'Noise‑Cancelling Earbuds',
      price: 129.99,
      category: 'Electronics',
      rating: 4.6,
      image: 'https://picsum.photos/seed/earbuds/400'
    },
    {
      id: 20,
      name: 'Compression Socks',
      price: 17.99,
      category: 'Sportswear',
      rating: 3.7,
      image: 'https://picsum.photos/seed/socks/400'
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.MOCK_PRODUCTS);

  products$ = this.productsSubject.asObservable();
}
