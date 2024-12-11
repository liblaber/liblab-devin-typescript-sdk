import { Devin } from 'devin';

(async () => {
  const devin = new Devin({
    token: 'YOUR_TOKEN',
  });

  const { data } = await devin.authStatus.authStatus();

  console.log(data);
})();
