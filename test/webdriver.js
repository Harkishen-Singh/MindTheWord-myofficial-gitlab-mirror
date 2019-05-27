const webdriver = require('selenium-webdriver'),
  chrome = require('selenium-webdriver/chrome'),
  actionSequence = webdriver.actionSequence,
  bootstrapTourTests = require('./components/bootstrapTour_variables'),
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

function resetHomePage() {
  describe('reset to home screen', function() {
    it('set screen as home page', (done) => {
      driver.get('chrome-extension://jaodmdnaglgheeibgdcgdbhljooejiha/views/options.html').then(() => {
        done();
      });
    });
  });
}

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
      driver.findElement(By.xpath(bootstrapTourTests.nextWelcome)).click().then(e => {
        done();
      });
    });

    it('translation tab', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextTranslation)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('translator keys', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextTranslatorkeys)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('learning patterns', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextCreateLP)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('translation patterns', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextTP)).click().then(e => {
          done();
        });
      }, 500);
    });
    
    it('blacklist tab', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextBlacklistTab)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('blacklist websites', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextBW)).click().then(e => {
          done();
        });
      }, 500);
      
    });
    
    it('blacklist words', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextBWords)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('learning tab', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextLearningTab)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('saved translation', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextSavedTranslationDiv)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('learnt words', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextLearntWordsDiv)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('advance settings', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextAdv)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('backup', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextBackUp)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('quiz', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextQuiz)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('statistics', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextStats)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('contribute', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextContribute)).click().then(e => {
          done();
        });
      }, 500);
    });

    it('finish tour', (done) => {
      setTimeout(() => {
        driver.findElement(By.xpath(bootstrapTourTests.nextTourFinish)).click().then(e => {
          done();
        });
      }, 500);
    });

    resetHomePage();
  });

  
}); 
