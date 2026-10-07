declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(action: string, category: string, label: string) {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
  });
}

export function trackSectionView(section: string) {
  window.gtag?.('event', 'section_view', {
    event_category: 'engagement',
    event_label: section,
  });
}

export function trackOutboundClick(platform: string, url: string) {
  window.gtag?.('event', 'click', {
    event_category: 'outbound',
    event_label: platform,
    transport_type: 'beacon',
    event_callback: () => {},
  });
}
