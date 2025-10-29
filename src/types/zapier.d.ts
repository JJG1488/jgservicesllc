/**
 * TypeScript declarations for Zapier Interfaces Chatbot Web Component
 * This allows the custom web component to be used in TSX/JSX without type errors
 */

declare namespace JSX {
  interface IntrinsicElements {
    'zapier-interfaces-chatbot-embed': {
      /**
       * The unique chatbot ID from your Zapier Interfaces chatbot
       */
      'chatbot-id': string;

      /**
       * Whether to display the chatbot as a popup (bottom-right corner)
       * Set to 'true' for popup mode, 'false' or omit for embedded mode
       */
      'is-popup'?: 'true' | 'false' | boolean;

      /**
       * Optional: Custom height for embedded mode (not used in popup mode)
       */
      'height'?: string;

      /**
       * Optional: Custom width for embedded mode (not used in popup mode)
       */
      'width'?: string;

      /**
       * Allow any other attributes that might be added by Zapier
       */
      [key: string]: any;
    };
  }
}

export {};
