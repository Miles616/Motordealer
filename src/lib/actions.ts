"use server";

import { z } from "zod";
import { recommendVehicles, RecommendVehiclesInput } from "@/ai/flows/recommend-vehicles";
import { revalidatePath } from "next/cache";

const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  vehicleInfo: z.string(),
});

export type InquiryState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function submitInquiry(prevState: InquiryState, formData: FormData) {
  const validatedFields = inquirySchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    vehicleInfo: formData.get('vehicleInfo'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to submit inquiry. Please check the fields.',
    };
  }

  // Here you would typically send an email or save to a database.
  // For this demo, we'll just log it.
  console.log("New Inquiry:", validatedFields.data);
  
  revalidatePath('/');

  return {
    message: 'Your inquiry has been submitted successfully!',
  };
}


const recommendationSchema = z.object({
    budget: z.coerce.number().optional(),
    preferredBodyStyle: z.string().optional(),
    numberOfSeats: z.coerce.number().optional(),
});

export async function getRecommendations(formData: FormData) {
    const validatedFields = recommendationSchema.safeParse({
        budget: formData.get('budget'),
        preferredBodyStyle: formData.get('preferredBodyStyle'),
        numberOfSeats: formData.get('numberOfSeats'),
    });

    if (!validatedFields.success) {
        return { error: 'Invalid input.' };
    }

    try {
        const input: RecommendVehiclesInput = validatedFields.data;
        const result = await recommendVehicles(input);
        return { recommendations: result.recommendations };
    } catch (e) {
        console.error(e);
        return { error: 'Failed to get recommendations.' };
    }
}
