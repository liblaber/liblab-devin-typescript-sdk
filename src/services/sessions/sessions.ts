import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CreateSessionRequest, createSessionRequestRequest } from './models/create-session-request';
import { CreateSessionOkResponse, createSessionOkResponseResponse } from './models/create-session-ok-response';
import {
  GetSessionDetailsOkResponse,
  getSessionDetailsOkResponseResponse,
} from './models/get-session-details-ok-response';

export class SessionsService extends BaseService {
  /**
   * Create a new Devin session to start working on a task.
   * @returns {Promise<HttpResponse<CreateSessionOkResponse>>} undefined
   */
  async createSession(
    body: CreateSessionRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreateSessionOkResponse>> {
    const request = new RequestBuilder<CreateSessionOkResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/v1/sessions')
      .setRequestSchema(createSessionRequestRequest)
      .setResponseSchema(createSessionOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<CreateSessionOkResponse>(request);
  }

  /**
   * Retrieve details about an existing session, including its status and any structured output.
   * @param {string} sessionId -
   * @returns {Promise<HttpResponse<GetSessionDetailsOkResponse>>} undefined
   */
  async getSessionDetails(
    sessionId: string,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<GetSessionDetailsOkResponse>> {
    const request = new RequestBuilder<GetSessionDetailsOkResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/v1/sessions/{session_id}')
      .setRequestSchema(z.any())
      .setResponseSchema(getSessionDetailsOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'session_id',
        value: sessionId,
      })
      .build();
    return this.client.call<GetSessionDetailsOkResponse>(request);
  }
}
