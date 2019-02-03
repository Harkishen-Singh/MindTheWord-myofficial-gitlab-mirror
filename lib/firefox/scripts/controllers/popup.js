import angular from 'angular';
import $ from 'jquery';
import bootstrap from 'bootstrap';

/** Class for popup angular controller */
export class PopupCtrl {
  /**
   * Initialize activation data.
   * @constructor
   * @param {Object} $scope - Angular scope
   * @param {Object} $timeout - Angular timeout
   * @param {Object} $window - Angular window
   */
  constructor($scope, $timeout, $window) {
    this.$timeout = $timeout;
    this.$window = $window;
    this.$scope = $scope;
    $('#mtw-Activation').bootstrapToggle();

    browser.storage.local.get(['activation', 'activationToggles', 'stats', 'learntWords', 'userBlacklistedWords', 'blacklist']).then((data, err) => {
      this.activation = data.activation;
      this.stats = data.stats;
      this.activationToggles = data.activationToggles;
      this.learntWords = data.learntWords.slice(1, -1).split('|');
      this.blacklistedWords = data.userBlacklistedWords.slice(1, -1).split('|').filter(function(n) { return n !== ''; });
      this.blacklistedWebsites = data.blacklist.slice(1, -1).split('|').filter(function(n) { return n !== ''; });
      this.blacklistWebsiteReg = new RegExp(data.blacklist);
      this.$timeout(() => {
        this.$scope.$apply();
      });
      this.createStatNode('Words Translated : ',this.stats.totalWordsTranslated);
      this.createStatNode('Learnt Words : ',this.learntWords.length);
      this.createStatNode('Blacklisted Words : ',this.blacklistedWords.length);
      this.createStatNode('Blacklisted Websites : ',this.blacklistedWebsites.length);
      browser.tabs.query({active: true}).then((tab) => {
        this.isBlacklisted = (this.blacklistWebsiteReg.test(tab.url));
        this.tabURL = tab.url;
        if(this.isBlacklisted){
          document.getElementById('mtwPopBlacklistImage').src='../assets/img/whitelistWebsite.png';
        }
      });
      var dummyControl = this;
      $('#mtw-Activation').change(function() {
        if($(this).is(':checked')) {
          dummyControl.setActivation(true);
          browser.runtime.sendMessage('message_on');
        } else {
          dummyControl.setActivation(false);
          browser.runtime.sendMessage('message_off');
        }
      });
      if(!this.activation){
        $('#mtw-Activation').prop('checked', false).change();
        document.getElementById('mtw_data_display').style.display = 'none';
        document.getElementById('mtwPopToggle').style.display = 'none';
        document.getElementById('mtwPopBlacklist').style.display = 'none';
      }
    });
  }

  createStatNode(text,value){
    var node = document.createElement('LI');
    var textnode = document.createTextNode(text + value);
	  node.appendChild(textnode);
	  document.getElementById('mtw_data_display').appendChild(node);
  }

  /**
   * Store user activation data to browser local storage
   * @param {string} - activation value set by the user
   */
  setActivation(value) {
    if (this.activation !== value) {
      this.activation = value;
      browser.storage.local.set({activation: value});
      browser.tabs.query({active: true}).then((tab, err) => {
        var code = 'window.location.reload();';
        browser.tabs.executeScript(tab.id, {code: code});
      });
    }
    if(value){
      document.getElementById('mtw_data_display').style.display = 'block';
      document.getElementById('mtwPopToggle').style.display = 'inline';
      document.getElementById('mtwPopBlacklist').style.display = 'inline';
    }
    else{
      document.getElementById('mtw_data_display').style.display = 'none';
      document.getElementById('mtwPopToggle').style.display = 'none';
      document.getElementById('mtwPopBlacklist').style.display = 'none';
    }
  }

  /**
   * Redirect user to options.html from popup
   */
  openOptions() {
    this.$window.open('options.html');
  }

  /**
   * Toggle all translated words on active tab.
   * Sends a message to the content script to run
   * its toggle function on the tab.
   */
  toggleTranslations() {
    browser.tabs.query({active: true, currentWindow: true}).then((tabs, err) => {
      browser.tabs.sendMessage(tabs[0].id, {type: 'toggleAllElements'});
    });
  }

  blacklistFunc(){
    if(this.isBlacklisted){
      this.whitelistURL(this.tabURL);
    }
    else{
      this.addUrlToBlacklist(this.tabURL);
    }
    browser.tabs.query({active: true}).then((tab, err) => {
      var code = 'window.location.reload();';
      browser.tabs.executeScript(tab.id, {code: code});
    });
  }

  addUrlToBlacklist(tabURL) {
    var updatedBlacklist;
    browser.storage.local.get('blacklist').then((result, err) => {
      var currentBlacklist = result.blacklist;
      var blacklistURLs = [];
      blacklistURLs = currentBlacklist.slice(1, -1).split('|');
      var re = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
      var domainNameFromTabURL = tabURL.match(re)[0];
      //to avoid duplication
      updatedBlacklist = '';
      if (blacklistURLs.indexOf(domainNameFromTabURL + '*') === -1) {
        //incase of empty current black list
        if (!currentBlacklist) {
          updatedBlacklist = '(' + domainNameFromTabURL + '*)';
        } else {
          updatedBlacklist = currentBlacklist.split(')')[0] + '|' + domainNameFromTabURL + '*)';
        }
      }
      browser.storage.local.set({
        'blacklist': updatedBlacklist
      });
    });
  }

  whitelistURL(url) {
    browser.storage.local.get('blacklist').then((data, err) => {
      let currentBlacklist = data.blacklist.slice(1, -1).split('|');
      for (let i in currentBlacklist) {
        let re = new RegExp(currentBlacklist[i]);
        if (re.test(url)) {
          currentBlacklist.splice(i, 1);
          break;
        }
      }
      browser.storage.local.set({ 'blacklist': '(' + currentBlacklist.join('|') + ')' });
    });
  }

}

angular.module('MTWPopup', [])
  .controller('PopupCtrl', PopupCtrl);
