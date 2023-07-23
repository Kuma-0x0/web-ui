import axios from 'axios';

export async function getAsync<TResponse>(
  url: string,
): Promise<[statusCode: number, content: TResponse | null]> {
  let statusCode: number = 200;
  let content: TResponse | null = null;

  await axios.get(url).then((response) => {
    statusCode = response.status;

    if (typeof response.data === 'string' && response.data.trim().length > 0) {
      try {
        content = JSON.parse(response.data) as TResponse;
      } catch {
        content = null;
      }
    }
  });

  return [statusCode, content];
}

export async function postAsync<TRequest, TResponse>(
  url: string,
  content: TRequest,
): Promise<[statusCode: number, content: TResponse | null]> {
  let statusCode: number = 200;
  let responseContent: TResponse | null = null;

  await axios.post(url, content).then((response) => {
    statusCode = response.status;

    if (typeof response.data === 'string' && response.data.trim().length > 0) {
      try {
        responseContent = JSON.parse(response.data) as TResponse;
      } catch {
        responseContent = null;
      }
    }
  });

  return [statusCode, responseContent];
}
