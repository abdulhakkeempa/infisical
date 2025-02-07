// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const GitAppOrgSchema = z.object({
  id: z.string().uuid(),
  installationId: z.string(),
  userId: z.string().uuid(),
  orgId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TGitAppOrg = z.infer<typeof GitAppOrgSchema>;
export type TGitAppOrgInsert = Omit<TGitAppOrg, TImmutableDBKeys>;
export type TGitAppOrgUpdate = Partial<Omit<TGitAppOrg, TImmutableDBKeys>>;
