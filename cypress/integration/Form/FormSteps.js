import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import TestActions from '../../support/PageResource/TestActions'

const test= new TestActions();

// Given("I am on the Selenium-Easy site", ()=>{

//     cy.visit('/');
// });

Given("I am on Test site", ()=>{

    cy.visit('/');
});
When('I click on {string} ', function (string){
    cy.fixture("Navigate").then((nav)=>{ 
    switch (string) {
        case "Banner prompt":
            test.pageWait(nav.asertbanner);
            test.clickElement(nav.banner);
            break;

        case "Input Form":
            test.clickElement(nav.inputForms);
            break;
        case "Simple Form Demo":
        test.clickElement(nav.simpleFormD);
        
    }    
    });

});
And(/^I navigate to the Menu List$/, function (){
    cy.fixture("Navigate").then((nav)=>{ 
    
        test.scrollToElement(nav.sideNav);

        
    })
});
 

Then(/^I should see A list of Demo$/, function (){
    cy.fixture("Navigate").then((nav)=>{ 
        pages.pageWait(nav.inputForms);
    });
});
When('I click om Simple From Demo  {string}', function (string){
    cy.fixture("Navigate").then((nav)=>{ 
    switch (string) {
        case "Simple From Demo":
            test.clickElement(nav.simpleFormD);
    }
});
And(/^I enter "value" for  "([^"]*)"$/, function (value){
    cy.fixture("Navigate").then((nav)=>{ 
        switch (value) {
           case  "A":
            test.typeAValue(nav.sumOne,nav.valueA);
            break;
            switch (string) {
             case  "B":
           test.typeAValue(nav.sumOne,nav.valueB);
           break;
    });
});
And (/^I click on "([^"]*)" button$/, function (button){
    cy.fixture("Navigate").then((nav)=>{ 
    switch (button) {
        case "Get Total":
            test.clickElement(nav.sumTotal);

    })
Then (/^I should see a success message$/, function (){
    cy.fixture("Navigate").then((nav)=>{ 
     test.viewElementText(nav.sumDisplay,nav.total);    

});
})
})
