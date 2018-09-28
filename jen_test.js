var webdriver = require('selenium-webdriver'),
By = webdriver.By;
var assert=require('assert');
var capabilities = {
 'browserName' : 'chrome'
}
var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
driver.get('http://bc638997.ngrok.io');
driver.findElement(By.xpath("/html/body/p")).getText().then(function (ans){
    if(assert.equal('Hello',ans,"error2") === undefined){
        console.log("Correct value");
    } 
});
 
driver.quit();