import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().min(8),
  customerType: z.string().min(2),
  serviceRequired: z.string().min(2),
  suburb: z.string().min(2),
  monthlySpend: z.string().optional(),
  timeline: z.string().optional(),
  preferredContact: z.string().optional(),
  consent: z.literal(true),
  sourcePage: z.string().optional(),
  utmSource: z.string().optional(),
  utmCampaign: z.string().optional()
});

export type LeadInput = z.infer<typeof leadSchema>;

export function buildLeadReference() {
  return `RICO-${Date.now().toString(36).toUpperCase()}`;
}
