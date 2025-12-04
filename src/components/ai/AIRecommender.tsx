"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getRecommendations } from '@/lib/actions';
import { Sparkles, Loader2 } from 'lucide-react';

const recommendationSchema = z.object({
  budget: z.coerce.number().positive({ message: "Budget must be a positive number." }).optional(),
  preferredBodyStyle: z.string().optional(),
  numberOfSeats: z.coerce.number().int().positive({ message: "Number of seats must be a positive integer." }).optional(),
});

type RecommendationFormValues = z.infer<typeof recommendationSchema>;

export function AIRecommender() {
  const [open, setOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationSchema),
  });

  const onSubmit: SubmitHandler<RecommendationFormValues> = async (data) => {
    setIsLoading(true);
    setRecommendations(null);
    setError(null);
    
    const formData = new FormData();
    if (data.budget) formData.append('budget', String(data.budget));
    if (data.preferredBodyStyle) formData.append('preferredBodyStyle', data.preferredBodyStyle);
    if (data.numberOfSeats) formData.append('numberOfSeats', String(data.numberOfSeats));

    const result = await getRecommendations(formData);
    
    if (result.recommendations) {
      setRecommendations(result.recommendations);
    } else {
      setError(result.error || 'An unexpected error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Sparkles className="mr-2 h-4 w-4" />
          AI Recommender
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">AI Vehicle Recommender</DialogTitle>
          <DialogDescription>
            Tell us your preferences, and our AI will suggest the perfect vehicles for you.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max Budget ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 35000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredBodyStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body Style</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Any style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Sedan">Sedan</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
                      <SelectItem value="Truck">Truck</SelectItem>
                      <SelectItem value="Coupe">Coupe</SelectItem>
                      <SelectItem value="Convertible">Convertible</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="numberOfSeats"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Seats</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                {isLoading ? 'Thinking...' : 'Get Recommendations'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
        {recommendations && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Here are our suggestions:</h4>
            <ul className="list-disc list-inside space-y-1 rounded-md border p-4 bg-secondary/50">
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
        {error && (
            <div className="mt-4 text-sm text-red-500">{error}</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
