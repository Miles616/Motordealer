"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import type { Vehicle } from '@/lib/types';
import { X } from 'lucide-react';

interface VehicleFiltersProps {
  vehicles: Vehicle[];
  setFilteredVehicles: (vehicles: Vehicle[]) => void;
}

export default function VehicleFilters({ vehicles, setFilteredVehicles }: VehicleFiltersProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [make, setMake] = useState('all');
    const [bodyStyle, setBodyStyle] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 100000]);

    const makes = useMemo(() => ['all', ...Array.from(new Set(vehicles.map(v => v.make)))], [vehicles]);
    const bodyStyles = useMemo(() => ['all', ...Array.from(new Set(vehicles.map(v => v.bodyStyle)))], [vehicles]);

    const applyFilters = useCallback(() => {
        let filtered = vehicles;

        if (searchTerm) {
            filtered = filtered.filter(v => 
                v.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
                v.model.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (make !== 'all') {
            filtered = filtered.filter(v => v.make === make);
        }

        if (bodyStyle !== 'all') {
            filtered = filtered.filter(v => v.bodyStyle === bodyStyle);
        }
        
        filtered = filtered.filter(v => v.price >= priceRange[0] && v.price <= priceRange[1]);

        setFilteredVehicles(filtered);
    }, [vehicles, searchTerm, make, bodyStyle, priceRange, setFilteredVehicles]);
    
    useEffect(() => {
      const debounce = setTimeout(() => {
        applyFilters();
      }, 300);
      return () => clearTimeout(debounce);
    }, [applyFilters]);

    const resetFilters = () => {
        setSearchTerm('');
        setMake('all');
        setBodyStyle('all');
        setPriceRange([0, 100000]);
        setFilteredVehicles(vehicles);
    }
    
    return (
        <Card>
            <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                    <Input 
                        placeholder="Search by make or model..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Select value={make} onValueChange={setMake}>
                        <SelectTrigger><SelectValue placeholder="All Makes" /></SelectTrigger>
                        <SelectContent>
                            {makes.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                        </SelectContent>
                    </Select>

                    <Select value={bodyStyle} onValueChange={setBodyStyle}>
                        <SelectTrigger><SelectValue placeholder="All Body Styles" /></SelectTrigger>
                        <SelectContent>
                            {bodyStyles.map(bs => <SelectItem key={bs} value={bs}>{bs}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Price Range</span>
                            <span className="font-medium">${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</span>
                        </div>
                        <Slider 
                            value={priceRange}
                            onValueChange={setPriceRange}
                            min={0}
                            max={100000}
                            step={1000}
                        />
                    </div>
                </div>
                 <div className="flex justify-end mt-4">
                    <Button variant="ghost" onClick={resetFilters}>
                        <X className="mr-2 h-4 w-4" />
                        Reset Filters
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
