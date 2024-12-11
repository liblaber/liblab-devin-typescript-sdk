import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createSessionRequest = z.lazy(() => {
  return z.object({
    prompt: z.string(),
    snapshotId: z.string().optional(),
    playbookId: z.string().optional(),
    unlisted: z.boolean().optional(),
    idempotent: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {CreateSessionRequest} createSessionRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {boolean}
 */
export type CreateSessionRequest = z.infer<typeof createSessionRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createSessionRequestResponse = z.lazy(() => {
  return z
    .object({
      prompt: z.string(),
      snapshot_id: z.string().optional(),
      playbook_id: z.string().optional(),
      unlisted: z.boolean().optional(),
      idempotent: z.boolean().optional(),
    })
    .transform((data) => ({
      prompt: data['prompt'],
      snapshotId: data['snapshot_id'],
      playbookId: data['playbook_id'],
      unlisted: data['unlisted'],
      idempotent: data['idempotent'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createSessionRequestRequest = z.lazy(() => {
  return z
    .object({
      prompt: z.string().nullish(),
      snapshotId: z.string().nullish(),
      playbookId: z.string().nullish(),
      unlisted: z.boolean().nullish(),
      idempotent: z.boolean().nullish(),
    })
    .transform((data) => ({
      prompt: data['prompt'],
      snapshot_id: data['snapshotId'],
      playbook_id: data['playbookId'],
      unlisted: data['unlisted'],
      idempotent: data['idempotent'],
    }));
});
