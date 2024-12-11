import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { AuthStatusOkResponse, authStatusOkResponseResponse } from './models/auth-status-ok-response';

export class AuthStatusService extends BaseService {
  /**
   * Verify that your API key is valid and active.
   * @returns {Promise<HttpResponse<AuthStatusOkResponse>>} undefined
   */
  async authStatus(requestConfig?: RequestConfig): Promise<HttpResponse<AuthStatusOkResponse>> {
    const request = new RequestBuilder<AuthStatusOkResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v1/auth_status')
      .setRequestSchema(z.any())
      .setResponseSchema(authStatusOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<AuthStatusOkResponse>(request);
  }
}
