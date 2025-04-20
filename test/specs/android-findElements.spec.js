describe('Android Find Elements', () => {
    it ('Find elements by accessibility id', async () => {
        //find elemnets by accessibility id
        const appElement =  $('~App');

        //click
        await appElement.click();

        //expect to have element on next screen
        await expect($(`~Device Admin`)).toBeDisplayed();
    })
});