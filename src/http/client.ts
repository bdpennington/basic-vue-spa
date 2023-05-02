import axios, {
  AxiosHeaders,
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from 'axios';

/**
 * Wrapper around HTTP calls using axios
 */
export default class HttpClient {
  private static instance?: HttpClient;
  private readonly axiosInstance: AxiosInstance;
  private readonly isDebug: boolean;

  private constructor() {
    const {
      VUE_APP_API_HOST: apiHost,
      VUE_APP_API_ACCESS_TOKEN_KEY: accessHeaderKey,
      VUE_APP_API_ACCESS_TOKEN_VALUE: accessHeaderValue,
    } = process.env;
    const baseURL = new URL(`https://${apiHost}/api/`).toString();

    const headers = new AxiosHeaders();
    headers.set(accessHeaderKey, accessHeaderValue);

    // Create instance with config
    this.axiosInstance = axios.create({
      baseURL,
      headers,
    });

    this._initializeResponseInterceptor();
    this.isDebug = process.env.VUE_APP_DEBUG
      ? process.env.NODE_ENV === 'development'
      : false;
  }

  public static getInstance(): HttpClient {
    if (!this.instance) {
      this.instance = new HttpClient();
    }

    return this.instance;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public get<T, D extends Record<string, string | number>>(
    url: string,
    params?: D
  ): Promise<T> {
    return this.axiosInstance.get<T>(url, { params }).then((res) => {
      return res.data;
    });
  }

  public post<T, D>(url: string, data: D): Promise<T> {
    return this.axiosInstance.post<T>(url, data).then((res) => {
      return res.data;
    });
  }

  public put<T, D>(url: string, data: D): Promise<T> {
    return this.axiosInstance.put<T>(url, data).then((res) => {
      return res.data;
    });
  }

  public patch<T, D>(url: string, data: D): Promise<T> {
    return this.axiosInstance.patch<T>(url, data).then((res) => {
      return res.data;
    });
  }

  public delete<T>(url: string): Promise<T> {
    return this.axiosInstance.delete<T>(url).then((res) => {
      return res.data;
    });
  }

  private _initializeResponseInterceptor = () => {
    this.axiosInstance.interceptors.response.use(
      (res) => this._handleResponse(res),
      (err) => this._handleError(err)
    );
  };

  private _handleResponse = (res: AxiosResponse) => {
    if (this.isDebug) {
      // eslint-disable-next-line no-console
      console.info(res);
    }
    return res;
  };

  private _handleError = async (error: AxiosError) => {
    if (this.isDebug) {
      // eslint-disable-next-line no-console
      console.info(error.response);
    }
    return Promise.reject(error);
  };
}
