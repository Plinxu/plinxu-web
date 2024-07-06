import { z } from "zod";

export const PersonalSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  country: z.string().optional(),
  currency: z.string().optional(), 
  ip: z.string().optional(),
  socialLink: z.string().optional(),
  video: z.string().optional(),
  isApproved: z.boolean().optional(), 
  gender: z.string().optional(),
  DOB: z.string().optional(),
  countryOfBirth: z.string().optional(),
  nationality: z.string().optional(),
  phoneNumber: z.string().optional(),
  Address: z.string().optional(),
  signature: z.string().optional(),
  info: z.string().optional(),
});

export type PersonalType = z.infer<typeof PersonalSchema>;