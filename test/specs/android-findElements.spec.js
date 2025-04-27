describe('Android Find Elements', () => {
    it ('Find elements by accessibility id', async () => {
        //find elemnets by accessibility id
        const appElementByAccessibilityId =  $('~App');

        //click
        await appElementByAccessibilityId.click();

        //expect to have element on next screen
        await expect($(`~Device Admin`)).toBeDisplayed();
    })

    it(`Find elements by xPath`, async () => {
        //back to home screen
        await driver.back();

        //find elements by class name
        const  appElementByxPath =  $('//android.widget.TextView[@content-desc="Animation"]');

        //click
        await appElementByxPath.click();

        //expect to have element on next screen
        await expect($(`//android.widget.TextView[@content-desc="Bouncing Balls"]`)).toBeDisplayed();
    })
});