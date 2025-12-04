"use client";

import { useState } from 'react';
import { vehicles as allVehicles } from '@/lib/vehicles';
import type { Vehicle } from '@/lib/types';
import VehicleFilters from '@/components/vehicles/VehicleFilters';
import VehicleCard from '@/components/vehicles/VehicleCard';
import { AnimatePresence, motion } from 'framer-motion';

export default function VehicleListings() {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(allVehicles);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-4 tracking-tight">Our Fleet</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover your next ride from our curated collection of premium vehicles. Use the filters below to find the perfect match.
        </p>
      </div>

      <VehicleFilters
        vehicles={allVehicles}
        setFilteredVehicles={setFilteredVehicles}
      />
      
      <AnimatePresence>
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">No vehicles match your criteria.</p>
            )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
