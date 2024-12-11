# SessionsService

A list of all methods in the `SessionsService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                                                                                 |
| :-------------------------------------- | :------------------------------------------------------------------------------------------ |
| [createSession](#createsession)         | Create a new Devin session to start working on a task.                                      |
| [getSessionDetails](#getsessiondetails) | Retrieve details about an existing session, including its status and any structured output. |

## createSession

Create a new Devin session to start working on a task.

- HTTP Method: `POST`
- Endpoint: `/v1/sessions`

**Parameters**

| Name | Type                                                      | Required | Description       |
| :--- | :-------------------------------------------------------- | :------- | :---------------- |
| body | [CreateSessionRequest](../models/CreateSessionRequest.md) | ❌       | The request body. |

**Return Type**

`CreateSessionOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateSessionRequest, Devin } from 'devin';

(async () => {
  const devin = new Devin({
    token: 'YOUR_TOKEN',
  });

  const createSessionRequest: CreateSessionRequest = {
    prompt: 'prompt',
  };

  const { data } = await devin.sessions.createSession(createSessionRequest);

  console.log(data);
})();
```

## getSessionDetails

Retrieve details about an existing session, including its status and any structured output.

- HTTP Method: `GET`
- Endpoint: `/v1/sessions/{session_id}`

**Parameters**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| sessionId | string | ✅       |             |

**Return Type**

`GetSessionDetailsOkResponse`

**Example Usage Code Snippet**

```typescript
import { Devin } from 'devin';

(async () => {
  const devin = new Devin({
    token: 'YOUR_TOKEN',
  });

  const { data } = await devin.sessions.getSessionDetails('session_id');

  console.log(data);
})();
```
