import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const authStatusOkResponse = z.lazy(() => {
  return z.object({
    status: z.string().optional(),
    orgId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {AuthStatusOkResponse} authStatusOkResponse
 * @property {string}
 * @property {string}
 */
export type AuthStatusOkResponse = z.infer<typeof authStatusOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const authStatusOkResponseResponse = z.lazy(() => {
  return z
    .object({
      status: z.string().optional(),
      org_id: z.string().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      orgId: data['org_id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const authStatusOkResponseRequest = z.lazy(() => {
  return z.object({ status: z.string().nullish(), orgId: z.string().nullish() }).transform((data) => ({
    status: data['status'],
    org_id: data['orgId'],
  }));
});
