const webdriver = require('selenium-webdriver'),
  chrome = require('selenium-webdriver/chrome'),
  actionSequence = webdriver.actionSequence,
  bootstrapTourVars = require('./components/bootstrapTour_variables'),
  patternOperationsVars = require('./components/patternsCreation_variables'),
  blacklisttestVars = require('./components/blacklistTest_variables'),
  Key = webdriver.Key,
  By = webdriver.By;

{ 
  describe, it;
} require('selenium-webdriver/testing');

// adding browser options
let chromeOptions = new chrome.Options(), driver;
chromeOptions.addArguments('--no-sandbox');
chromeOptions.addArguments('--disable-dev-shm-usage');
chromeOptions.addArguments('--disable-gpu');
chromeOptions.addArguments('--load-extension=dist/');

function reloadToHomePage() {
  describe('reset to home screen', function() {
    it('set screen as home page', (done) => {
      driver.get('chrome-extension://jaodmdnaglgheeibgdcgdbhljooejiha/views/options.html').then(() => {
        done();
      });
    });
  });
}

function scrollToElementByxPath(text) {
  element = driver.findElement(By.xpath(text));
  driver.executeScript('arguments[0].scrollIntoView()', element);
  driver.sleep(300);
};

describe('Executing tests in chrome environments', function() {
  // global test timeout
  this.timeout(40000);

  describe('Creating browser instances', () => {
    it('launching chrome instances with Mind The Word extension', (done) => {
      driver = new webdriver
        .Builder()
        .setChromeOptions(chromeOptions)
        .forBrowser('chrome')
        .build();

      driver.then(() => {
        done();
      });
    });

    it ('loading extension', (done) => {
      driver.get('chrome-extension://jaodmdnaglgheeibgdcgdbhljooejiha/views/options.html').then(() => {
        done();
      });
    });
  });

  describe('Bootstrap tour test', function() {
    it('welcome screen', (done) => {
      driver.findElement(By.xpath(bootstrapTourVars.nextWelcome)).click().then(e => {
        done();
      });
    });

    it('translation tab', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextTranslation)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('translator keys', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextTranslatorkeys)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('learning patterns', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextCreateLP)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('translation patterns', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextTP)).click().then(e => {
          done();
        });
      }, 500);
    });
    
    it('blacklist tab', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextBlacklistTab)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('blacklist websites', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextBW)).click().then(e => {
          done();
        });
      }, 500);
      
    });
    
    it('blacklist words', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextBWords)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('learning tab', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextLearningTab)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('saved translation', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextSavedTranslationDiv)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('learnt words', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextLearntWordsDiv)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('advance settings', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextAdv)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('backup', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextBackUp)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('quiz', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextQuiz)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('statistics', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextStats)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('contribute', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextContribute)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('finish tour', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourVars.nextTourFinish)).click().then(e => {
          done();
        });
      }, 500);
    });

    reloadToHomePage();
  });

  describe('Pattern Operations', function() {

    it('assign random api keys', (done) => {
      driver.findElement(By.xpath(patternOperationsVars.yandexInputField)).then(field1 => {
        field1.sendKeys('randomYandexKey1');
        driver.findElement(By.xpath(patternOperationsVars.azureInputField)).then(field2 => {
          field2.sendKeys('randomAzureKey1');
          driver.findElement(By.xpath(patternOperationsVars.googleInputField)).then(field3 => {
            field3.sendKeys('randomGoogleKey1');
            // operations
            driver.manage().window().maximize();
            done();
          });
        });
      });
    });

    describe('creating patterns', function() {
      it('Yandex', (done) => {
        driver.findElement(By.xpath(patternOperationsVars.patternTranslator)).sendKeys('Yandex').then(() => {
          driver.findElement(By.xpath(patternOperationsVars.patternPercent)).sendKeys('70').then(() => {
            driver.findElement(By.xpath(patternOperationsVars.patternSrcLang)).sendKeys('English').then(() => {
              driver.findElement(By.xpath(patternOperationsVars.patternTargetLang)).sendKeys('Hindi').then(() => {
                setTimeout(() => {
                  let element = driver.findElement(By.xpath(patternOperationsVars.patternCreationDiv));
                  driver.executeScript('arguments[0].scrollIntoView()', element).then(() => {
                    driver.findElement(By.xpath(patternOperationsVars.patternCreateButton)).click().then(() => {
                      done();
                    });
                  });
                }, 500);
              });
            });
          });
        });
      });
      
      it('Azure', (done) => {
        driver.findElement(By.xpath(patternOperationsVars.patternTranslator)).sendKeys('Azure').then(() => {
          driver.findElement(By.xpath(patternOperationsVars.patternPercent)).sendKeys('60').then(() => {
            driver.findElement(By.xpath(patternOperationsVars.patternSrcLang)).sendKeys('English').then(() => {
              driver.findElement(By.xpath(patternOperationsVars.patternTargetLang)).sendKeys('Hindi').then(() => {
                setTimeout(() => {
                  let element = driver.findElement(By.xpath(patternOperationsVars.patternCreationDiv));
                  driver.executeScript('arguments[0].scrollIntoView()', element).then(() => {
                    driver.findElement(By.xpath(patternOperationsVars.patternCreateButton)).click().then(() => {
                      done();
                    });
                  });
                }, 500);
              });
            });
          });
        });
      });

      it('Google', (done) => {
        driver.findElement(By.xpath(patternOperationsVars.patternTranslator)).sendKeys('Google').then(() => {
          driver.findElement(By.xpath(patternOperationsVars.patternPercent)).sendKeys('50').then(() => {
            driver.findElement(By.xpath(patternOperationsVars.patternSrcLang)).sendKeys('English').then(() => {
              driver.findElement(By.xpath(patternOperationsVars.patternTargetLang)).sendKeys('Hindi').then(() => {
                setTimeout(() => {
                  let element = driver.findElement(By.xpath(patternOperationsVars.patternCreationDiv));
                  driver.executeScript('arguments[0].scrollIntoView()', element).then(() => {
                    driver.findElement(By.xpath(patternOperationsVars.patternCreateButton)).click().then(() => {
                      done();
                    });
                  });
                }, 500);
              });
            });
          });
        });
      });
    });

    describe('check pattern', function() {
      // reload the page to check angular modules and local chrome
      it('check translation patterns', (done) => {
        reloadToHomePage();
        driver.findElement(By.xpath(patternOperationsVars.createdYandex)).then(() => {
          // yandex pattern found
          driver.findElement(By.xpath(patternOperationsVars.createdAzure)).then(() => {
            // azure pattern found
            driver.findElement(By.xpath(patternOperationsVars.createdGoogle)).then(() => {
              // google pattern found
              done();
            });
          });
        });
      });

      it('toggling patterns', (done) => {
        // the active symbol exists on the last created pattern
        driver.executeScript('window.scrollTo(0,0)').then(() => {
          // scrolled to page top
          driver.findElement(By.xpath(patternOperationsVars.activeSymbolLastPattern)).then(() => {
            // last pattern active
            driver.findElement(By.xpath(patternOperationsVars.createdYandex)).click().then(() => {
              // activated the first pattern
              driver.findElement(By.xpath(patternOperationsVars.activeSymbolFirstPattern)).then(() => {
                // checked the first pattern to be active
                done();
              });
            });
          });
        });
      });
  
      it('deleting patterns', (done) => {
        driver.findElement(By.xpath(patternOperationsVars.deleteThirdPattern)).click().then(() => {
          // deleted third pattern
          driver.findElement(By.xpath(patternOperationsVars.deleteSecondPattern)).click().then(() => {
            // deleted second pattern
            driver.findElement(By.xpath(patternOperationsVars.deleteFirstPattern)).click().then((res) => {
              // deleted first pattern
              driver.findElement(By.xpath(patternOperationsVars.createdYandex)).then(() => {
                // failed to delete element
                throw new Error('unable to delete translation patterns');
              },(err) => {
                // element was deleted
                done();
              });
            });
          });
        });
      });
    });

  });

  describe('Blacklist functionality', function() {
    it('open blacklist page', (done) => {
      driver.findElement(By.xpath('//*[@id="blacklisting-nav"]')).click().then(() => {
        done();
      });
    });

    it('whitelisting website', (done) => {
      driver.findElement(By.xpath(blacklisttestVars.firstBlacklistWebsiteElement)).getText().then((text) => {
        driver.findElement(By.xpath(blacklisttestVars.firstBlacklistWebsiteButton)).click().then(() => {
          // removed from blacklist
          driver.findElement(By.xpath(blacklisttestVars.firstBlacklistWebsiteElement)).getText().then((text2) => {
            if (text !== text2) {
              done();
            } else {
              throw new Error('Website could not be removed from the blacklist');
            }
          });
        });
      });
    });

    it('blacklisting website', (done) => {
      driver.findElement(By.xpath(blacklisttestVars.bl_websitesInput)).sendKeys('stackoverflow.com').then(() => {
        driver.findElement(By.xpath(blacklisttestVars.add_bl_websites)).click().then(() => {
          done();
        });
      });
    });

    it('whitelisting words', (done) => {
      driver.findElement(By.xpath(blacklisttestVars.firstBlacklistWordElement)).getText().then((text) => {
        driver.findElement(By.xpath(blacklisttestVars.firstBlacklistWordButton)).click().then(() => {
          // removed from blacklist
          driver.findElement(By.xpath(blacklisttestVars.firstBlacklistWordElement)).getText().then((text2) => {
            if (text !== text2) {
              done();
            } else {
              throw new Error('word could not be removed from the blacklist');
            }
          });
        });
      });
    });
  
    it('blacklisting words', (done) => {
      driver.findElement(By.xpath(blacklisttestVars.bl_wordsInput)).sendKeys('this').then(() => {
        driver.findElement(By.xpath(blacklisttestVars.add_bl_words)).click().then(() => {
          done();
        });
      });
    });

  });
}); 
