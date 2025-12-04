import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Vehicle } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const image = PlaceHolderImages.find(img => img.id === vehicle.images[0].id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/vehicles/${vehicle.id}`} className="block group">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="p-0">
            <div className="aspect-video overflow-hidden">
              {image && (
                 <Image
                    src={image.imageUrl}
                    alt={vehicle.images[0].alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                />
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-headline font-semibold text-lg">{vehicle.make} {vehicle.model}</h3>
              <Badge variant="secondary">{vehicle.year}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{vehicle.bodyStyle}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center bg-secondary/30">
            <p className="font-semibold text-primary text-xl">
              ${vehicle.price.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              {vehicle.mileage.toLocaleString()} miles
            </p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
