'use client';

import { useEffect } from 'react';

// Declare Google Translate types
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSelector() {
  useEffect(() => {
    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'es,fr,de,it,pt,ru,ja,ko,zh-CN,ar,hi,pl,nl,sv,no,da,fi,el,tr,he,id,th,vi,cs,ro,hu,bg,uk,sk,hr,sr,sl,et,lv,lt',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Load Google Translate script if not already loaded
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, just initialize
      if (window.google && window.google.translate) {
        window.googleTranslateElementInit();
      }
    }
  }, []);

  return (
    <div className="relative">
      {/* Google Translate Element Container */}
      <div id="google_translate_element" className="inline-block"></div>

      {/* Custom Styling */}
      <style jsx global>{`
        /* Hide Google Translate banner */
        .goog-te-banner-frame {
          display: none !important;
        }

        body {
          top: 0 !important;
        }

        /* Style the Google Translate widget */
        #google_translate_element {
          display: inline-block;
        }

        .goog-te-gadget {
          font-family: inherit !important;
          font-size: 0 !important;
        }

        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
          border-radius: 0.5rem !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 0.5rem !important;
        }

        /* Light mode styles */
        .goog-te-gadget-simple {
          background-color: rgb(243 244 246) !important;
          color: rgb(31 41 55) !important;
        }

        /* Dark mode styles */
        html.dark .goog-te-gadget-simple {
          background-color: rgb(31 41 55) !important;
          color: rgb(243 244 246) !important;
        }

        .goog-te-gadget-simple:hover {
          background-color: rgb(229 231 235) !important;
        }

        html.dark .goog-te-gadget-simple:hover {
          background-color: rgb(55 65 81) !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value {
          color: inherit !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span {
          color: inherit !important;
          border: none !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none;
        }

        .goog-te-gadget-icon {
          display: none !important;
        }

        .goog-te-gadget-simple .goog-te-menu-value:before {
          content: '🌐';
          margin-right: 0.5rem;
          font-size: 1.25rem;
        }

        /* Style the dropdown menu */
        .goog-te-menu-frame {
          border-radius: 0.5rem !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
        }

        /* Powered by Google text */
        .goog-logo-link {
          display: none !important;
        }

        .goog-te-gadget {
          color: transparent !important;
        }

        /* Mobile responsive */
        @media (max-width: 640px) {
          .goog-te-gadget-simple {
            font-size: 12px !important;
          }

          .goog-te-gadget-simple .goog-te-menu-value:before {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
