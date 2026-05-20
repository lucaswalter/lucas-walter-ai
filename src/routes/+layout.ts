// Static linktree: prerender every route to HTML at build time so Cloudflare
// serves it straight from the asset CDN, with the worker only as fallback.
export const prerender = true;
