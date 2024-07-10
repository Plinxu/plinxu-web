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
  DOB: z.number().optional(),
  countryOfBirth: z.string().optional(),
  nationality: z.string().optional(),
  phoneNumber: z.string().optional(),
  Address: z.string().optional(),
  signature: z.string().optional(),
  info: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  employment: z.string().optional(),
  postalcode: z.string().optional(),
  middleName: z.string().optional(),
  occupation: z.string().optional()

});

export type PersonalType = z.infer<typeof PersonalSchema>;