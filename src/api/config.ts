import { IHeader } from 'types/request';

interface ICreateApi {
  baseUrl: string;
  baseHeaders: IHeader;
}

function createApi({ baseUrl, baseHeaders }: ICreateApi) {
  return {
    get: function (route: string, headers?: IHeader) {
      return fetch(`${baseUrl}${route}`);
    },
    post: function (route: string, headers?: IHeader) {
      fetch(`${baseUrl}${route}`, {
        headers: {
          ...baseHeaders,
          ...headers,
        },
        method: 'POST',
      });
    },
  };
}

const api = createApi({
  baseUrl: `${process.env.REACT_APP_API_URL}`,
  baseHeaders: { token: `${process.env.REACT_APP_API_TOKEN}` },
});

export { api };
