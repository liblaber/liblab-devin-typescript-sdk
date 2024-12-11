import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getSessionDetailsOkResponse = z.lazy(() => {
  return z.object({
    sessionId: z.string().optional(),
    status: z.string().optional(),
    title: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    snapshotId: z.string().optional(),
    playbookId: z.string().optional(),
    structuredOutput: z.any().optional(),
    statusEnum: z.string().optional(),
  });
});

/**
 *
 * @typedef  {GetSessionDetailsOkResponse} getSessionDetailsOkResponse
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any}
 * @property {string}
 */
export type GetSessionDetailsOkResponse = z.infer<typeof getSessionDetailsOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getSessionDetailsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      session_id: z.string().optional(),
      status: z.string().optional(),
      title: z.string().optional(),
      created_at: z.string().optional(),
      updated_at: z.string().optional(),
      snapshot_id: z.string().optional(),
      playbook_id: z.string().optional(),
      structured_output: z.any().optional(),
      status_enum: z.string().optional(),
    })
    .transform((data) => ({
      sessionId: data['session_id'],
      status: data['status'],
      title: data['title'],
      createdAt: data['created_at'],
      updatedAt: data['updated_at'],
      snapshotId: data['snapshot_id'],
      playbookId: data['playbook_id'],
      structuredOutput: data['structured_output'],
      statusEnum: data['status_enum'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getSessionDetailsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      sessionId: z.string().nullish(),
      status: z.string().nullish(),
      title: z.string().nullish(),
      createdAt: z.string().nullish(),
      updatedAt: z.string().nullish(),
      snapshotId: z.string().nullish(),
      playbookId: z.string().nullish(),
      structuredOutput: z.any().nullish(),
      statusEnum: z.string().nullish(),
    })
    .transform((data) => ({
      session_id: data['sessionId'],
      status: data['status'],
      title: data['title'],
      created_at: data['createdAt'],
      updated_at: data['updatedAt'],
      snapshot_id: data['snapshotId'],
      playbook_id: data['playbookId'],
      structured_output: data['structuredOutput'],
      status_enum: data['statusEnum'],
    }));
});
