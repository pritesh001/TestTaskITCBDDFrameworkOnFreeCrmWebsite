Feature: Free CRM login test and image upload feature		
# My script is based on BDD cucumber and i have registered here on freecrm.com with platform generated email
# In this set up my script will run 4 times and we can see that the contact is  getting added and .jpg file will be uploaded for every contact
Scenario Outline: Free CRM Login test 
Given : user is already on login page
When : title of the login page is FREE CRM
When : we click on the login button
Then : user enters "<username>" and  "<password>" 
Then : user clicks on login button    
And  : user is on home page 
When : user mouse hover on New Contact Link
Then : user creating new contact by entering  "<firstname>" and "<lastname>" and "<email>" and "<identifier>" and upload picture
Then : click on save buttton
Then : user mouse hover on New Contact Link to confirm the contact is added
Then : Close the browser

Examples:
|  username                   |  password       | firstname     |  lastname      |  email                 |  identifier    |
|  ppritesh.sinha@gmail.com   |  Bng$20167      | ITC1 Test     |  Automation1   |  testdata1@itc.com     |  testjava 1    |
|  ppritesh.sinha@gmail.com   |  Bng$20167      | ITC2 Test     |  Automation2   |  testdata2@itc.com     |  testjava 2    |
|  ppritesh.sinha@gmail.com   |  Bng$20167      | ITC3 Test     |  Automation3   |  testdata3@itc.com     |  testjava 3    |
|  ppritesh.sinha@gmail.com   |  Bng$20167      | ITC4 Test     |  Automation4   |  testdata4@itc.com     |  testjava 4    |