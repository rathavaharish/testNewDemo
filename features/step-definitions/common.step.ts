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
 
const   standard = await $('.standard-checkout');
await   standard.click() 
  
})
Then(/^verify cart price$/,async () => {    
    const   shopping_cart = await $('.shopping_cart a');
    await   shopping_cart.click() 

   

    const pricematch = $('#total_product_price_1_1_635671')
    await expect(pricematch).toHaveTextContaining('$16.51')

})

