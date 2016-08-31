chrome.webRequest.onBeforeRequest.addListener(
  function(){ return {cancel: true}; },
  {
    urls: ["*://www.s4is.histats.com/*","*://imgg.mgid.com/*","*://mgid.com/*","mgid.com/*","*://www.mgid.com/*","*://ae-gb.mgid.com/*","http://www.googletagservices.com/tag/js/gpt.js","*://www.adnetworkperformance.com/*"], // Change this to a more specific pattern
    types: ["script"]
  },
  ["blocking"]
);