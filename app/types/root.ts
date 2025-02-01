export interface Route {
  MetaArgs: Record<string, unknown>;
  ErrorBoundaryProps: { error: unknown };
  LinksFunction: () => Array<{ rel: string; href: string; crossOrigin?: string }>;
}
