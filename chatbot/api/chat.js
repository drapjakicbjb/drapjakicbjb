/**
 * Universal Chat Endpoint Handler
 * Processes requests via  BodhSakhāAIEngine using all page data and returns dynamic custom responses.
 */

window.KalamChatAPI = (function () {
  'use strict';

  async function processChatRequest(query, lang = 'auto') {
    if (!query || typeof query !== 'string') {
      return {
        error: true,
        html: '<p>Please enter a valid question.</p>'
      };
    }

    try {
      if (window.BodhSakhāAIEngine && typeof window.BodhSakhāAIEngine.generateCustomResponse === 'function') {
        const response = await window.BodhSakhāAIEngine.generateCustomResponse(query, lang);
        return {
          error: false,
          html: response.html,
          text: response.text
        };
      } else {
        throw new Error(' BodhSakhāAIEngine not loaded');
      }
    } catch (err) {
      console.error('Chat API Error:', err);
      return {
        error: true,
        html: `<p>Sorry, could not process your request right now. Please try again or call office at +91 9648904085.</p>`
      };
    }
  }

  return {
    processChatRequest
  };
})();
