# AttachmentsService

A list of all methods in the `AttachmentsService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description                          |
| :------------------------------------------ | :----------------------------------- |
| [createV1Attachments](#createv1attachments) | Upload files for Devin to work with. |

## createV1Attachments

Upload files for Devin to work with.

- HTTP Method: `POST`
- Endpoint: `/v1/attachments`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [CreateV1AttachmentsRequest](../models/CreateV1AttachmentsRequest.md) | ❌       | The request body. |

**Return Type**

`string`

**Example Usage Code Snippet**

```typescript
import { CreateV1AttachmentsRequest, Devin } from 'devin';

(async () => {
  const devin = new Devin({
    token: 'YOUR_TOKEN',
  });

  const createV1AttachmentsRequest: CreateV1AttachmentsRequest = {};

  const { data } = await devin.attachments.createV1Attachments(createV1AttachmentsRequest);

  console.log(data);
})();
```
