$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login test and image upload feature",
  "description": "",
  "id": "free-crm-login-test-and-image-upload-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Login test",
  "description": "",
  "id": "free-crm-login-test-and-image-upload-feature;free-crm-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": ": user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ": title of the login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": we click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": user enters \"ppritesh.sinha@gmail.com\" and  \"Bng$20167\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": ": user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": ": user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": ": user mouse hover on New Contact Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": ": user creating new contact by entering  \"ITC1 Test\" and \"Automation1\" and \"testdata1@itc.com\" and \"testjava 1\" and upload picture",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": ": click on save buttton",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": ": user mouse hover on New Contact Link to confirm the contact is added",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": ": Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition._user_is_already_on_login_page()"
});
formatter.result({
  "duration": 9008946021,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._title_of_the_login_page_is_FREE_CRM()"
});
formatter.result({
  "duration": 605645965,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._we_click_on_the_login_button()"
});
formatter.result({
  "duration": 59018768407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ppritesh.sinha@gmail.com",
      "offset": 15
    },
    {
      "val": "Bng$20167",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinition._user_enters_and(String,String)"
});
formatter.result({
  "duration": 634172947,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_clicks_on_login_button()"
});
formatter.result({
  "duration": 141993400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_is_on_home_page()"
});
formatter.result({
  "duration": 1018004183,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_mouse_hover_on_New_Contact_Link()"
});
formatter.result({
  "duration": 19667586202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ITC1 Test",
      "offset": 42
    },
    {
      "val": "Automation1",
      "offset": 58
    },
    {
      "val": "testdata1@itc.com",
      "offset": 76
    },
    {
      "val": "testjava 1",
      "offset": 100
    }
  ],
  "location": "LoginStepDefinition._user_creating_new_contact_by_entering_and_and_and_and_upload_picture(String,String,String,String)"
});
formatter.result({
  "duration": 29574173098,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._click_on_save_buttton()"
});
formatter.result({
  "duration": 216829907,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_mouse_hover_on_New_Contact_Link_to_confirm_the_contact_is_added()"
});
formatter.result({
  "duration": 258892782,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._Close_the_browser()"
});
formatter.result({
  "duration": 49336578891,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Login test",
  "description": "",
  "id": "free-crm-login-test-and-image-upload-feature;free-crm-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": ": user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ": title of the login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": we click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": user enters \"ppritesh.sinha@gmail.com\" and  \"Bng$20167\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": ": user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": ": user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": ": user mouse hover on New Contact Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": ": user creating new contact by entering  \"ITC2 Test\" and \"Automation2\" and \"testdata2@itc.com\" and \"testjava 2\" and upload picture",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": ": click on save buttton",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": ": user mouse hover on New Contact Link to confirm the contact is added",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": ": Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition._user_is_already_on_login_page()"
});
formatter.result({
  "duration": 7038995031,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._title_of_the_login_page_is_FREE_CRM()"
});
formatter.result({
  "duration": 509746115,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._we_click_on_the_login_button()"
});
formatter.result({
  "duration": 9992108184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ppritesh.sinha@gmail.com",
      "offset": 15
    },
    {
      "val": "Bng$20167",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinition._user_enters_and(String,String)"
});
formatter.result({
  "duration": 766626769,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_clicks_on_login_button()"
});
formatter.result({
  "duration": 161081995,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_is_on_home_page()"
});
formatter.result({
  "duration": 1016819712,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_mouse_hover_on_New_Contact_Link()"
});
formatter.result({
  "duration": 51766764963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ITC2 Test",
      "offset": 42
    },
    {
      "val": "Automation2",
      "offset": 58
    },
    {
      "val": "testdata2@itc.com",
      "offset": 76
    },
    {
      "val": "testjava 2",
      "offset": 100
    }
  ],
  "location": "LoginStepDefinition._user_creating_new_contact_by_entering_and_and_and_and_upload_picture(String,String,String,String)"
});
formatter.result({
  "duration": 66476532978,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._click_on_save_buttton()"
});
formatter.result({
  "duration": 193640030,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_mouse_hover_on_New_Contact_Link_to_confirm_the_contact_is_added()"
});
formatter.result({
  "duration": 256076407,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._Close_the_browser()"
});
formatter.result({
  "duration": 47033128936,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Login test",
  "description": "",
  "id": "free-crm-login-test-and-image-upload-feature;free-crm-login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": ": user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ": title of the login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": we click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": user enters \"ppritesh.sinha@gmail.com\" and  \"Bng$20167\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": ": user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": ": user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": ": user mouse hover on New Contact Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": ": user creating new contact by entering  \"ITC3 Test\" and \"Automation3\" and \"testdata3@itc.com\" and \"testjava 3\" and upload picture",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": ": click on save buttton",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": ": user mouse hover on New Contact Link to confirm the contact is added",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": ": Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition._user_is_already_on_login_page()"
});
formatter.result({
  "duration": 7758237302,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._title_of_the_login_page_is_FREE_CRM()"
});
formatter.result({
  "duration": 407849904,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._we_click_on_the_login_button()"
});
formatter.result({
  "duration": 5486319871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ppritesh.sinha@gmail.com",
      "offset": 15
    },
    {
      "val": "Bng$20167",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinition._user_enters_and(String,String)"
});
formatter.result({
  "duration": 642174261,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_clicks_on_login_button()"
});
formatter.result({
  "duration": 132619202,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_is_on_home_page()"
});
formatter.result({
  "duration": 1015964492,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_mouse_hover_on_New_Contact_Link()"
});
formatter.result({
  "duration": 2148304285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ITC3 Test",
      "offset": 42
    },
    {
      "val": "Automation3",
      "offset": 58
    },
    {
      "val": "testdata3@itc.com",
      "offset": 76
    },
    {
      "val": "testjava 3",
      "offset": 100
    }
  ],
  "location": "LoginStepDefinition._user_creating_new_contact_by_entering_and_and_and_and_upload_picture(String,String,String,String)"
});
formatter.result({
  "duration": 23854234946,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._click_on_save_buttton()"
});
formatter.result({
  "duration": 202427089,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_mouse_hover_on_New_Contact_Link_to_confirm_the_contact_is_added()"
});
formatter.result({
  "duration": 253499419,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._Close_the_browser()"
});
formatter.result({
  "duration": 55411870384,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login test",
  "description": "",
  "id": "free-crm-login-test-and-image-upload-feature;free-crm-login-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": ": user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ": title of the login page is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": we click on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": user enters \"ppritesh.sinha@gmail.com\" and  \"Bng$20167\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": ": user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": ": user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": ": user mouse hover on New Contact Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": ": user creating new contact by entering  \"ITC4 Test\" and \"Automation4\" and \"testdata4@itc.com\" and \"testjava 4\" and upload picture",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": ": click on save buttton",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": ": user mouse hover on New Contact Link to confirm the contact is added",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": ": Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition._user_is_already_on_login_page()"
});
formatter.result({
  "duration": 38258602045,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._title_of_the_login_page_is_FREE_CRM()"
});
formatter.result({
  "duration": 492426107,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._we_click_on_the_login_button()"
});
formatter.result({
  "duration": 6981705080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ppritesh.sinha@gmail.com",
      "offset": 15
    },
    {
      "val": "Bng$20167",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinition._user_enters_and(String,String)"
});
formatter.result({
  "duration": 940271632,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_clicks_on_login_button()"
});
formatter.result({
  "duration": 173305795,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_is_on_home_page()"
});
formatter.result({
  "duration": 1024870112,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_mouse_hover_on_New_Contact_Link()"
});
formatter.result({
  "duration": 998143057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ITC4 Test",
      "offset": 42
    },
    {
      "val": "Automation4",
      "offset": 58
    },
    {
      "val": "testdata4@itc.com",
      "offset": 76
    },
    {
      "val": "testjava 4",
      "offset": 100
    }
  ],
  "location": "LoginStepDefinition._user_creating_new_contact_by_entering_and_and_and_and_upload_picture(String,String,String,String)"
});
formatter.result({
  "duration": 24536888885,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._click_on_save_buttton()"
});
formatter.result({
  "duration": 230678815,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._user_mouse_hover_on_New_Contact_Link_to_confirm_the_contact_is_added()"
});
formatter.result({
  "duration": 245978009,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition._Close_the_browser()"
});
formatter.result({
  "duration": 63808705125,
  "status": "passed"
});
});