# AuthStatusService

A list of all methods in the `AuthStatusService` service. Click on the method name to view detailed information about that method.

| Methods                   | Description                                   |
| :------------------------ | :-------------------------------------------- |
| [authStatus](#authstatus) | Verify that your API key is valid and active. |

## authStatus

Verify that your API key is valid and active.

- HTTP Method: `GET`
- Endpoint: `/v1/auth_status`

**Return Type**

`AuthStatusOkResponse`

**Example Usage Code Snippet**

```typescript
import { Devin } from 'devin';

(async () => {
  const devin = new Devin({
    token: 'YOUR_TOKEN',
  });

  const { data } = await devin.authStatus.authStatus();

  console.log(data);
})();
```
