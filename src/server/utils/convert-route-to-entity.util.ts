const mapping: Record<string, string> = {
  articles: 'article',
  publishers: 'publisher',
  reports: 'report',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
