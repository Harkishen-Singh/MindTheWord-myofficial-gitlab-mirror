import { ContextMenu } from './services/contextMenu';
import { localData } from './utils/defaultStorage';

var contextMenu = new ContextMenu(),
  translatedWords = {},
  activeContextMenuIds = ['speakTheWord', 'blacklistWebsite', 'searchForSimilarWords', 'translateSentence', 'whitelistWebsite'];

/**
 * Set up default data and store it in `browser.storage.localData`
 */
function initializeLocalStorage() {
  browser.storage.local.set(localData);
}

function handler() {
  if (browser.runtime.lastError) {
    console.log('error creating item:' + browser.runtime.lastError);
  } else {
    console.log('item created successfully');
  }
}

/**
 * Setup local data storage and context menus
 */
function setup() {
  initializeLocalStorage();
  browser.menus.create({
    'title': 'MindTheWord',
    'id': 'parent',
    'contexts': ['selection', 'page']
  }, handler());
  browser.menus.create({
    'title': 'Speak The Word',
    'parentId': 'parent',
    'contexts': ['selection'],
    'id': 'speakTheWord'
  }, handler());
  browser.menus.create({
    'title': 'Search For Similar Words',
    'parentId': 'parent',
    'contexts': ['selection'],
    'id': 'searchForSimilarWords'
  }, handler());
  browser.menus.create({
    'title': 'Google Search',
    'parentId': 'searchForSimilarWords',
    'contexts': ['selection'],
    'id': 'searchForSimilarWordsOnGoogle'
  }, handler());
  browser.menus.create({
    'title': 'Bing Search',
    'parentId': 'searchForSimilarWords',
    'contexts': ['selection'],
    'id': 'searchForSimilarWordsOnBing'
  }, handler());
  browser.menus.create({
    'title': 'Google Image Search',
    'parentId': 'searchForSimilarWords',
    'contexts': ['selection'],
    'id': 'searchForSimilarWordsOnGoogleImages'
  }, handler());
  browser.menus.create({
    'title': 'Thesaurus.com',
    'parentId': 'searchForSimilarWords',
    'contexts': ['selection'],
    'id': 'searchForSimilarWordsOnThesaurus'
  }, handler());
  browser.menus.create({
    'title': 'Translate Sentence',
    'parentId': 'parent',
    'contexts': ['selection'],
    'id': 'translateSentence'
  }, handler());
}

/**
 * Enable or disable all context menus
 * @param {boolean} value - true or false
 */
function setContextMenus(value) {
  for (let id in activeContextMenuIds) {
    browser.menus.update(activeContextMenuIds[id], {
      enabled: value
    });
  }
}

/**
 * Update context menu according to page
 * @param {string} url - active tab URL
 */
function updateContextMenu(url) {
  var status_ = browser.storage.local.get(['activation', 'blacklist']);
  status_.then((result, err) => {
    var activation = result.activation;
    if (activation === false) {
      setContextMenus(false);
    }
    else {
      setContextMenus(true);
    }
  });
}

/**
 * Checks if URL is changed. Call `updateContextMenu` if
 * new URL is not blank or browser URL.
 * @param {Integer} tabId - tab identifier
 * @param {Object} changeInfo - change information
 * @param {Object} tab - tab information
 */
function checkURLChange(tabId, changeInfo, tab) {
  if (changeInfo.url || changeInfo.status === 'complete') {
    if (/moz.*\:\/\//.test(changeInfo.url) === false) {
      updateContextMenu(changeInfo.url);
    } else {
      setContextMenus(false);
    }
  }
}

/**
 * Checks the current active tab has a valid URL and
 * calls `updateContextMenu` if true.
 * @param {Object} activeInfo - information about active tab
 */
function checkActiveTabChange(activeInfo) {
  var tab = browser.tabs.get(activeInfo.tabId);
  if (/moz.*\:\/\//.test(tab.url) === false) {
    updateContextMenu(tab.url);
  } else {
    setContextMenus(false);
  }
}

/**
 * Click event handler for context menu. Calls appropriate
 * functions from ContextMenu class.
 * @param {Object} info -
 * @param {Object} tabs -
 */
function contextMenuClickHandler(info, tab) {
  var tabQuery_ = browser.tabs.query({
    currentWindow: true,
    active: true
  });
  tabQuery_.then((tabs, err) => {
    var tabURL = tabs[0].url;
    switch (info.menuItemId) {
      case 'searchForSimilarWordsOnThesaurus':
        contextMenu.searchForSimilarWords(info.selectionText, 'thesaurus');
        break;
      case 'searchForSimilarWordsOnGoogle':
        contextMenu.searchForSimilarWords(info.selectionText, 'google');
        break;
      case 'searchForSimilarWordsOnBing':
        contextMenu.searchForSimilarWords(info.selectionText, 'bing');
        break;
      case 'searchForSimilarWordsOnGoogleImages':
        contextMenu.searchForSimilarWords(info.selectionText, 'googleImages');
        break;
      case 'speakTheWord':
        browser.storage.local.set({ 'utterance': info.selectionText }, function() {
          contextMenu.speakTheWord();
        });
        break;
      case 'translateSentence':
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs, err) => {
          browser.tabs.sendMessage(tabs[0].id, {
            type: 'getTranslatedWords',
            action: 'storeSelection'
          }, (response) => {
            if (response) {
              contextMenu.translateSentence(info.selectionText, response.translatedWords)
                .then((translationData) => {
                  browser.tabs.sendMessage(tabs[0].id, {
                    type: 'showTranslatedSentence',
                    data: translationData
                  });
                })
                .catch((e) => {
                  console.error('Error in obtaining translations', e);
                });
            }
          });
        });
        break;
      default:
        console.error('Wrong context menu id');
    }
  });
}

//On first installation, load default Data and initialize context menu
browser.runtime.onInstalled.addListener(setup);

// context menu handlers
browser.menus.onClicked.addListener(contextMenuClickHandler);

// update context menu if URL is changed
browser.tabs.onUpdated.addListener(checkURLChange);

// update context menu if active tab is changed
browser.tabs.onActivated.addListener(checkActiveTabChange);

// message listeners
browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === 'message_on'){
    var store_ = browser.storage.local.get(null);
    store_.then((obj, err) => {
      browser.browserAction.setBadgeText({text:String(obj.numberOfTranslatedWords)});
      browser.browserAction.setBadgeBackgroundColor({color: [48,63, 159,1.0]});
    });
  }
  if (message === 'message_off'){
    browser.browserAction.setBadgeText({text:String('')});
  }
  if (message === 'speakTheWord') {
    contextMenu.speakTheWord();
  }
});

browser.runtime.onInstalled.addListener(function(details){
  if(details.reason === 'install' || details.reason === 'update'){
    browser.storage.local.set({
      'newInstallUpdate': true
    });
  }
});