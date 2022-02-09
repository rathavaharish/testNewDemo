/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class commonPage {
    get btnSignIn(){
        return $(".login");
    }
    get linkContact(){
        return $("#contact-link");
    }
    get imgLogo(){
        return $(".logo.img-responsive");
    }
    get btnSignOut(){
        return $(".logout");
    }
    get SubmitCreate(){
        return $("#SubmitCreate");
    } 
 
    openHomePage() {
        browser.url("http://automationpractice.com/index.php");
        console.log("Navigatting to URL http://automationpractice.com/index.php");
        
        const browserTitle = browser.getTitle();
    }
    openLoginPage() {      
            const myButton =  $('.login')
             myButton.click({ x: 30 }) // clicks 30 horizontal pixels away from location of the button (from center point of element)
     }

    
    
  
}
export default new commonPage();
