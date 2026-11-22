/**
 * Routes that have their own chrome (demo microsites and /landing).
 * The marketing Navbar, Footer, and Organization/WebSite JSON-LD must not
 * render on these paths.
 */
const BARE_CHROME_PREFIXES = ["/movers", "/aqua-fix", "/trade-demo", "/landing"] as const;

export function shouldUseMarketingChrome(pathname: string): boolean {
  const path = pathname.split("?")[0] || "/";
  return !BARE_CHROME_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}
