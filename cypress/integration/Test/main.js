import TestActions from '../../support/PageResource/TestActions'
const test= new TestActions();

context('SeleniumEasy', ()=>{
 beforeEach(()=>{
  cy.fixture("Navigate").then((nav)=>{ 
    cy.visit('/'); 
    test.pageWait(nav.asertbanner);
  })
   cy.wait(3000);
});

  it ('Automate_Banner & Simple Form Demo', ()=>{

  cy.fixture("Navigate").then((nav)=>{ 
    // cy.visit('/');
    // test.pageWait(nav.asertbanner);
    // cy.wait(3000);
    test.clickElement(nav.banner);
    test.scrollToElement(nav.sideNav);
    test.clickElement(nav.inputForms);
    test.clickElement(nav.simpleFormD);
    test.scrollToElement(nav.sumOne);
    test.typeAValue(nav.sumOne,nav.valueA);
    //test.scrollToElement(nav.sumTwo);
    test.typeAValue(nav.sumTwo,nav.valueB);
    test.clickElement(nav.sumTotal);
    //INsert Assertion here to verify Result can be view a+b 
    test.viewElementText(nav.sumDisplay,nav.total);
    cy.wait(3000);

    })
  })  
  it ('Automate_Checkbox Demo', ()=>{

    cy.fixture("Navigate").then((nav)=>{ 
    //   cy.visit('/');
    //  test.pageWait(nav.asertbanner);
    //  cy.wait(3000);
    test.clickElement(nav.banner);
    test.scrollToElement(nav.sideNav);
    test.clickElement(nav.inputForms);
    test.clickElement(nav.checkBoxD);
    test.clickElement(nav.singleCheckBox);
    test.viewElementText(nav.sucessMessage,nav.sucessMessageText);
    cy.wait(3000);
    test.scrollToElement(nav.multipleCheckBoxSession);
    test.clickElement(nav.option1);
    test.clickElement(nav.option2);
    test.clickElement(nav.option3);
    test.clickElement(nav.option4);
    test.clickElement(nav.checkAllButton);
    
    })
  })  
  it ('Automate_Select_Dropdown_List', ()=>{

    cy.fixture("Navigate").then((nav)=>{ 
    //  cy.visit('/');
    //  test.pageWait(nav.asertbanner);
    //  cy.wait(3000);
    test.clickElement(nav.banner);
    test.scrollToElement(nav.sideNav);
    test.clickElement(nav.inputForms);
    test.clickElement(nav.selectDrop);
    test.selectValue(nav.singleSelect,nav.Day);
    test.viewElementText(nav.daySelected,nav.daySelectedMessageText);
    test.selectValue(nav.multiSelect,nav.State);
    test.clickElement(nav.firstSelected);
    test.viewElementText(nav.firstSelectedMessage,nav.firstSelectedMessageText);
    test.clickElement(nav.getAllSelected);
    test.viewElementText(nav.getAllSelectedMessage,nav.getAllSelectedMessageText);
    cy.wait(3000);
  
    })
  })        
 })