'use client';

import React from 'react';

/**
 * Zapier Interfaces Chatbot Component
 *
 * A wrapper component for the Zapier Interfaces chatbot web component.
 * This can be used in two modes:
 * 1. Popup mode (default) - Appears as a floating button in the bottom-right corner
 * 2. Embedded mode - Displays inline within the page content
 *
 * @example Popup mode (recommended for global use):
 * ```tsx
 * <ZapierChatbot chatbotId="cmhb5x5nh00awbrhjoqwao638" />
 * ```
 *
 * @example Embedded mode:
 * ```tsx
 * <ZapierChatbot
 *   chatbotId="cmhb5x5nh00awbrhjoqwao638"
 *   isPopup={false}
 *   height="600px"
 *   width="100%"
 * />
 * ```
 */

interface ZapierChatbotProps {
  /**
   * Your unique chatbot ID from Zapier Interfaces
   */
  chatbotId: string;

  /**
   * Display as a popup (floating button) or embedded inline
   * @default true
   */
  isPopup?: boolean;

  /**
   * Height for embedded mode (ignored in popup mode)
   * @default "600px"
   */
  height?: string;

  /**
   * Width for embedded mode (ignored in popup mode)
   * @default "100%"
   */
  width?: string;
}

export default function ZapierChatbot({
  chatbotId,
  isPopup = true,
  height = "600px",
  width = "100%"
}: ZapierChatbotProps) {
  return React.createElement(
    'zapier-interfaces-chatbot-embed',
    {
      'chatbot-id': chatbotId,
      'is-popup': isPopup ? 'true' : 'false',
      ...(! isPopup && { height, width })
    }
  );
}
