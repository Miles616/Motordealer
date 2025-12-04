import type { ImagePlaceholder } from './placeholder-images';

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  bodyStyle: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible';
  mileage: number;
  engine: string;
  transmission: 'Automatic' | 'Manual';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  exteriorColor: string;
  interiorColor: string;
  numberOfSeats: number;
  features: string[];
  description: string;
  images: {
    id: string;
    alt: string;
  }[];
};
