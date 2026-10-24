import { z } from "zod";

export const eventTypes = [
  { value: "wedding", label: "Wedding" },
  { value: "corporate", label: "Corporate event" },
  { value: "private", label: "Private celebration" },
  { value: "other", label: "Something else" },
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  event_type: z.enum(["wedding", "corporate", "private", "other"], { errorMap: () => ({ message: "Please choose an event type" }) }),
  event_date: z
    .string()
    .optional()
    .transform((v) => (v ? v : undefined))
    .refine((v) => !v || new Date(v) >= new Date(new Date().toDateString()), "Please choose a future date"),
  guest_count: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined))
    .refine((v) => v === undefined || (Number.isInteger(v) && v >= 1 && v <= 5000), "Enter a number between 1 and 5000"),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000, "Message must be under 2000 characters"),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
