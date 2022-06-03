type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface Options {
  method: Method;
  headers: Record<string, string>;
  body?: string;
}

interface Props {
  method?: Method;
  body?: any;
  accessToken?: string;
}
interface SendRequest {
  (url: string, Obj: Props): Promise<Response>;
}

const sendRequest: SendRequest = async (url, payload) => {
  const { method = 'GET', body, accessToken } = payload;

  const headers = { 'Content-Type': 'application/json', Authorization: '' };

  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

  const options: Options = { method, headers };

  if ((method === 'POST' || method === 'PATCH') && body)
    options.body = JSON.stringify(body);

  try {
    const response = await fetch(url, options);

    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);

    const json = await response.json();

    return json;
  } catch (error) {
    throw error;
  }
};

export default sendRequest;