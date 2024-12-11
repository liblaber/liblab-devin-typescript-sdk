import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { AuthStatusService } from './services/auth-status';
import { SessionsService } from './services/sessions';
import { AttachmentsService } from './services/attachments';

export * from './services/auth-status';
export * from './services/sessions';
export * from './services/attachments';

export type * from './http';

export class Devin {
  public readonly authStatus: AuthStatusService;

  public readonly sessions: SessionsService;

  public readonly attachments: AttachmentsService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.authStatus = new AuthStatusService(this.config);

    this.sessions = new SessionsService(this.config);

    this.attachments = new AttachmentsService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.authStatus.baseUrl = baseUrl;
    this.sessions.baseUrl = baseUrl;
    this.attachments.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.authStatus.baseUrl = environment;
    this.sessions.baseUrl = environment;
    this.attachments.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.authStatus.timeoutMs = timeoutMs;
    this.sessions.timeoutMs = timeoutMs;
    this.attachments.timeoutMs = timeoutMs;
  }

  set token(token: string) {
    this.authStatus.token = token;
    this.sessions.token = token;
    this.attachments.token = token;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
