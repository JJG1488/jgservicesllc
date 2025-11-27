// Client Intake Form Steps
// All components follow the same StepProps interface

export { default as ClientInfoStep } from './ClientInfoStep';
export { default as BaseTypeStep } from './BaseTypeStep';
export { default as DesignStep } from './DesignStep';
export { default as ContentStep } from './ContentStep';
export { default as PagesStep } from './PagesStep';
export { default as FormsStep } from './FormsStep';
export { default as BookingStep } from './BookingStep';
export { default as EcommerceStep } from './EcommerceStep';
export { default as UserSystemsStep } from './UserSystemsStep';
export { default as IntegrationsStep } from './IntegrationsStep';
export { default as SEOStep } from './SEOStep';
export { default as CMSStep } from './CMSStep';
export { default as SecurityStep } from './SecurityStep';
export { default as OngoingServicesStep } from './OngoingServicesStep';
export { default as TimelineStep } from './TimelineStep';
export { default as ProjectDescriptionStep } from './ProjectDescriptionStep';
export { default as ReviewStep } from './ReviewStep';

// Step order for the wizard
export const STEP_ORDER = [
  'ClientInfoStep',
  'BaseTypeStep',
  'DesignStep',
  'ContentStep',
  'PagesStep',
  'FormsStep',
  'BookingStep',
  'EcommerceStep',
  'UserSystemsStep',
  'IntegrationsStep',
  'SEOStep',
  'CMSStep',
  'SecurityStep',
  'OngoingServicesStep',
  'TimelineStep',
  'ProjectDescriptionStep',
  'ReviewStep',
] as const;
