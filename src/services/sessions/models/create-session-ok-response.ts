import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createSessionOkResponse = z.lazy(() => {
  return z.object({
    sessionId: z.string().optional(),
    url: z.string().optional(),
    isNewSession: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {CreateSessionOkResponse} createSessionOkResponse
 * @property {string}
 * @property {string}
 * @property {boolean}
 */
export type CreateSessionOkResponse = z.infer<typeof createSessionOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createSessionOkResponseResponse = z.lazy(() => {
  return z
    .object({
      session_id: z.string().optional(),
      url: z.string().optional(),
      is_new_session: z.boolean().optional(),
    })
    .transform((data) => ({
      sessionId: data['session_id'],
      url: data['url'],
      isNewSession: data['is_new_session'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createSessionOkResponseRequest = z.lazy(() => {
  return z
    .object({ sessionId: z.string().nullish(), url: z.string().nullish(), isNewSession: z.boolean().nullish() })
    .transform((data) => ({
      session_id: data['sessionId'],
      url: data['url'],
      is_new_session: data['isNewSession'],
    }));
});
