import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createV1AttachmentsRequest = z.lazy(() => {
  return z.object({
    file: z.instanceof(ArrayBuffer).optional(),
  });
});

/**
 *
 * @typedef  {CreateV1AttachmentsRequest} createV1AttachmentsRequest
 * @property {ArrayBuffer}
 */
export type CreateV1AttachmentsRequest = z.infer<typeof createV1AttachmentsRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createV1AttachmentsRequestResponse = z.lazy(() => {
  return z
    .object({
      file: z.instanceof(ArrayBuffer).optional(),
    })
    .transform((data) => ({
      file: data['file'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createV1AttachmentsRequestRequest = z.lazy(() => {
  return z.object({ file: z.instanceof(ArrayBuffer).nullish() }).transform((data) => ({
    file: data['file'],
  }));
});
