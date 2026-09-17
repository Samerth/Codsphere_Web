// utils/analytics.ts
// GA4 Measurement ID from environment variable
// Production: G-XB0WETSMSS (set in Vercel environment)
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track custom events with GA4 recommended parameters
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// ============================================================================
// CTA & Navigation Events
// ============================================================================

// Track CTA button clicks (e.g., "Show us your order flow", "Get started")
export const trackCtaClick = (ctaName: string, location: string, destination?: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', 'cta_click', {
      cta_name: ctaName,
      cta_location: location,
      link_url: destination,
    });
  }
};

// Track outbound link clicks (external sites)
export const trackOutboundClick = (url: string, linkText?: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', 'outbound_click', {
      link_url: url,
      link_text: linkText,
      outbound: true,
    });
  }
};

// ============================================================================
// Form Events
// ============================================================================

// Track form submissions (GA4 generate_lead event)
export const trackFormSubmit = (
  formName: string,
  formLocation: string,
  success: boolean = true,
  leadValue?: number
) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    // Primary event: form_submit
    window.gtag('event', 'form_submit', {
      form_name: formName,
      form_location: formLocation,
      form_success: success,
    });
    
    // GA4 recommended event: generate_lead (for successful submissions)
    if (success) {
      window.gtag('event', 'generate_lead', {
        currency: 'CAD',
        value: leadValue || 0,
      });
    }
  }
};

// Track form start (user begins filling form)
export const trackFormStart = (formName: string, formLocation: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', 'form_start', {
      form_name: formName,
      form_location: formLocation,
    });
  }
};

// ============================================================================
// Page/Content View Events
// ============================================================================

// Track pricing page views with specific context
export const trackViewPricing = (source?: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', 'view_pricing', {
      page_location: '/pricing',
      traffic_source: source,
    });
  }
};

// Track solution page views
export const trackViewSolution = (solutionName: string, solutionSlug: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', 'view_solution', {
      solution_name: solutionName,
      solution_slug: solutionSlug,
      page_location: `/solutions/${solutionSlug}`,
    });
  }
};

// Track project/case study views
export const trackViewProject = (projectName: string, projectSlug: string, industry?: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', 'view_project', {
      project_name: projectName,
      project_slug: projectSlug,
      project_industry: industry,
      page_location: `/projects/${projectSlug}`,
    });
  }
};

// ============================================================================
// Legacy/Deprecated (kept for backward compatibility)
// ============================================================================

// Track button clicks (legacy - use trackCtaClick instead)
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent({
    action: 'click',
    category: 'Button',
    label: `${buttonName} - ${location}`,
  });
};

// Track form submissions (legacy - use trackFormSubmit instead)
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent({
    action: success ? 'submit_success' : 'submit_error',
    category: 'Form',
    label: formName,
  });
};

// Track page views (called automatically in GoogleAnalytics component)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};