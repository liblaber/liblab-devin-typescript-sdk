import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CreateV1AttachmentsRequest, createV1AttachmentsRequestRequest } from './models/create-v1-attachments-request';

export class AttachmentsService extends BaseService {
  /**
   * Upload files for Devin to work with.
   * @returns {Promise<HttpResponse<string>>} undefined
   */
  async createV1Attachments(
    body: CreateV1AttachmentsRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/v1/attachments')
      .setRequestSchema(createV1AttachmentsRequestRequest)
      .setResponseSchema(z.string())
      .setRequestContentType(ContentType.MultipartFormData)
      .setResponseContentType(ContentType.Text)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'multipart/form-data' })
      .addBody(body)
      .build();
    return this.client.call<string>(request);
  }
}
