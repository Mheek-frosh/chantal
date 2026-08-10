import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  interest: z.enum([
    "Postpartum Recovery",
    "Core Strength",
    "Men’s Revitalization",
    "Mobility & Posture",
    "Private Coaching",
    "Not Sure Yet",
  ]),
  sessionType: z.enum(["In Studio", "Virtual", "Either"]),
  message: z.string().trim().max(1000, "Please keep your message under 1,000 characters.").optional(),
  consent: z.literal(true, { error: "Please confirm that we may contact you." }),
  company: z.string().max(0, "Spam detected."),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

