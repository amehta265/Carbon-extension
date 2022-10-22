// // to grab a unique we need to get the userID
// const queryParameters = ''
// if (tab.url && tab.url.includes()) {
//   // Add another permissions on manifest.json e.g. cookies
//   // Obtain the logged in user from amazon from those permissions e.g.
//   // by adding another chrome.cookies type beat
// }
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    // This condition is responsible for adding the bookmark
    console.log('tab.url')
    console.log(tab.url)
    if (tab.url && tab.url.includes("amazon.com/gp/buy/*")) {
      const queryParameters = tab.url.split('?')[1] // temporary
      // const urlParameters = new URLSearchParams(queryParameters);
      console.log('here are the queryParameters')
      console.log(queryParameters)
  
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        userId: queryParameters,
      });
    }
  });
  