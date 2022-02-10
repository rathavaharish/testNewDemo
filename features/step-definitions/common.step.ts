import { Given, When, Then } from '@wdio/cucumber-framework';

import commonPage from '../pageobjects/common.page';


Given(/^I am on the Home Page$/, async () => {
    await commonPage.openHomePage();

    await expect(commonPage.btnSignIn).toBePresent();
    await expect(commonPage.imgLogo).toBePresent();
    await expect(commonPage.linkContact).toBePresent();   
});

Given(/^I am Login Page$/, async () => {
    const login = await $('.login');
    await login.click() 
    await expect(commonPage.SubmitCreate).toBePresent();   

    const email = await $('#email');
    await email.setValue('rameshwerpark@gmail.com');

    const pass = await $('#passwd');
    await pass.setValue('pintu123');

    const SubmitLogin = await $('#SubmitLogin');
    await SubmitLogin.click() 
     
 
   
})
Then(/^Add product in Cart$/, async () => {
        
const womenMenu = await $('.sf-with-ul');
await womenMenu.click() 
     
const   ajax_add_to_cart_button = await $('.ajax_add_to_cart_button');
await   ajax_add_to_cart_button.click() 

const   checkout = await $('=Proceed to checkout');
await   checkout.click() 
   
})
Then(/^verify cart price$/,async () => {    
    const   shopping_cart = await $('.shopping_cart a');
    await   shopping_cart.click() 

   

    const pricematch = $('#total_product_price_1_1_635671')
    await expect(pricematch).toHaveTextContaining('$16.51')

})
Then(/^Send message from contact page$/,async () => {    
    const   contact = await $('#contact-link');
    await   contact.click();    

    const   msgTextArea = await $('#message');
    await   msgTextArea.addValue("Hello I am Harish")
   

    const selectBox = await $('#id_contact');

    await selectBox.selectByAttribute('value', '2');

    const submitMessage = await $('#submitMessage');
    await submitMessage.click();

    browser.pause(5000);

})
Then(/^Make Payment for cart added order$/,async () => {

    const   shopping_cart = await $('.shopping_cart a');
    await   shopping_cart.click() 

    const   standard = await $('.standard-checkout');
    await   standard.click() 

    const   cartcheckout = await $('.cart_navigation button');
    await   cartcheckout.click() 
    
    const   cgv = await $('#cgv');
    await   cgv.click() 

    const   standardcheckout = await $('.standard-checkout');
    await   standardcheckout.click() 

    const   bankwire = await $('.bankwire');
    await   bankwire.click()   

    
})
Then(/^Search T-Shirt in Serchbox$/,async () => {   
    const search_query_top = await $('#search_query_top');
    await search_query_top.setValue('T-Shirt');
    
    const buttonSearch = await $('#search_query_top');
    await buttonSearch.click();
    
    browser.pause(5000);
})
Then(/^Open order history detail$/,async () => {
    const account = await $(".account");
    await account.click(); 
    browser.pause(5000);
    const orderHistoryAndDetail = await $(".icon-list-ol");
    await orderHistoryAndDetail.click();     
});
Then(/^Open My Credit Slips$/,async () => {
    const myaccount = await $("=My account");
    await myaccount.click(); 

    const myCreditSlip = await $(".icon-ban-circle");
    await myCreditSlip.click();    
})
Then(/^Open My Addresses$/,async () => {
    const myaccount = await $("=My account");
    await myaccount.click(); 

    const myAddresses = await $(".icon-building");
    await myAddresses.click();    
})
Then(/^Open My Personal Information$/,async () => {
    const myaccount = await $("=My account");
    await myaccount.click(); 

    const mypersonalInfo = await $(".icon-user");
    await mypersonalInfo.click();    
})
Then(/^Open My Wishlists$/,async () => {
    const myaccount = await $("=My account");
    await myaccount.click(); 

    const myCreditSlip = await $(".icon-heart");
    await myCreditSlip.click();    
})

