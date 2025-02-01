export interface Route {
    MetaArgs: Record<string, unknown>;
    FormData: {
      username: string;
      password: string;
    };
  }
  