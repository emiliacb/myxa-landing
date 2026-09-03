export function trackEvent(name, properties) {
  if (typeof window === "undefined" || !window.posthog) return;
  window.posthog.capture(name, properties);
}
