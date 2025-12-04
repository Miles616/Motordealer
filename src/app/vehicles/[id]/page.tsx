import { vehicles } from '@/lib/vehicles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import InquiryForm from '@/components/vehicles/InquiryForm';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Car, Gauge, GitCommitHorizontal, Droplets, Users, Palette, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function VehiclePage({ params }: { params: { id: string } }) {
  const vehicle = vehicles.find(v => v.id === params.id);

  if (!vehicle) {
    notFound();
  }

  const specIcons = {
    Mileage: <Gauge className="h-5 w-5 text-primary" />,
    Engine: <Car className="h-5 w-5 text-primary" />,
    Transmission: <GitCommitHorizontal className="h-5 w-5 text-primary" />,
    'Fuel Type': <Droplets className="h-5 w-5 text-primary" />,
    Seats: <Users className="h-5 w-5 text-primary" />,
    'Exterior Color': <Palette className="h-5 w-5 text-primary" />,
    Year: <Calendar className="h-5 w-5 text-primary" />,
  };
  type SpecIconKey = keyof typeof specIcons;

  const specifications = {
    Year: vehicle.year,
    Mileage: `${vehicle.mileage.toLocaleString()} miles`,
    Engine: vehicle.engine,
    Transmission: vehicle.transmission,
    'Fuel Type': vehicle.fuelType,
    Seats: vehicle.numberOfSeats,
    'Exterior Color': vehicle.exteriorColor,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {vehicle.images.map((img, index) => {
                const pImage = PlaceHolderImages.find(p => p.id === img.id);
                if (!pImage) return null;
                return (
                  <CarouselItem key={index}>
                    <div className="aspect-video overflow-hidden rounded-lg border">
                      <Image
                        src={pImage.imageUrl}
                        alt={img.alt}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        data-ai-hint={pImage.imageHint}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="space-y-6">
          <div>
            <Badge>{vehicle.bodyStyle}</Badge>
            <h1 className="font-headline text-4xl font-bold mt-2">{vehicle.make} {vehicle.model}</h1>
            <p className="text-3xl font-semibold text-primary mt-2">${vehicle.price.toLocaleString()}</p>
          </div>
          <p className="text-muted-foreground">{vehicle.description}</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="flex items-start gap-3">
                    {specIcons[key as SpecIconKey]}
                    <div>
                        <p className="text-sm text-muted-foreground">{key}</p>
                        <p className="font-semibold">{value}</p>
                    </div>
                </div>
            ))}
          </div>

           {vehicle.features.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.features.map((feature, index) => (
                  <Badge key={index} variant="outline">{feature}</Badge>
                ))}
              </div>
            </div>
           )}

        </div>
      </div>
      <Separator className="my-12" />
      <div className="max-w-2xl mx-auto">
        <InquiryForm vehicleInfo={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} />
      </div>
    </div>
  );
}
