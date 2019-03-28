package StepDefinitions;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.ClipboardOwner;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends CRMUserSteps

{
	
	
	//CRMUserSteps steps ;
	
	private static final ClipboardOwner owner = null;
	WebDriver driver ;
	
	
	
	

@Given("^: user is already on login page$")
public void _user_is_already_on_login_page() throws Throwable {
	
	
	//steps.setsystemproperty();
	
	System.setProperty("webdriver.chrome.driver", "C:/selenium chrome driver/chromedriver_win32/chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("https://www.freecrm.com");
	
	
   
}

@When("^: title of the login page is FREE CRM$")
public void _title_of_the_login_page_is_FREE_CRM() throws Throwable {
 
	
	String title = driver.getTitle();
	System.out.println(title);
	Assert.assertEquals("#1 Free CRM software can Power any business with our Cloud CRM", title);
	
}


@When("^: we click on the login button$")
public void _we_click_on_the_login_button() throws Throwable {

	driver.findElement(By.xpath("//span[contains(.,'Log In')]")).click();
}






@Then("^: user enters \"([^\"]*)\" and  \"([^\"]*)\"$")
public void _user_enters_and(String username, String password) throws Throwable {
	driver.findElement(By.xpath ( "//input[contains(@type,'text')]")).sendKeys(username);
	driver.findElement(By.xpath ("//input[contains(@type,'password')]")).sendKeys(password);
}



@Then("^: user clicks on login button$")
public void _user_clicks_on_login_button() throws Throwable {
	
	driver.findElement(By.xpath ( "//div[@class='ui fluid large blue submit button'][contains(.,'Login')]")).click();
	
	
	//WebElement loginbutton = driver.findElement(By.xpath("//input [@type='submit'] "));
	//JavascriptExecutor executor = (JavascriptExecutor)driver;
	//executor.executeScript("arguments[0].click();", loginbutton);
	
}





@Then("^: user is on home page$")
public void _user_is_on_home_page() throws Throwable {
	
	String title = driver.getTitle();
	System.out.println( "Home Page Title  is  :: " +  title);
	
	Assert.assertEquals("CRM", title);
	Thread.sleep(1000);
	
}





@When("^: user mouse hover on New Contact Link$")
public void _user_mouse_hover_on_New_Contact_Link() throws Throwable {
	Thread.sleep(100);
	driver.findElement(By.xpath (  "(//span[@class='item-text'])[3]")).click();
	
	Thread.sleep(100);
	driver.findElement(By.xpath ("//button[contains(.,'New')]")).click();
	
	Thread.sleep(100);
	
	}


@Then("^: user creating new contact by entering  \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and upload picture$")
public void _user_creating_new_contact_by_entering_and_and_and_and_upload_picture(String firstname, String lastname, String email, String identifier) throws Throwable {
	Thread.sleep(1000);
	
	 
	driver.findElement(By.xpath ("//input[contains(@name,'first_name')]")).sendKeys(firstname);
	Thread.sleep(1000);
	
     driver.findElement(By.xpath ("//input[@name='last_name']")).sendKeys(lastname);
     Thread.sleep(1000);
 	
     driver.findElement(By.xpath ("(//input[contains(@name,'value')])[1]")).sendKeys(email);
     Thread.sleep(1000);
 	
     driver.findElement(By.xpath ("//input[@name='identifier']")).sendKeys(identifier);
     Thread.sleep(1000);
     
    // String s = "C:\\Users\\Pritesh Gunjan\\Desktop\\Seleniumfile\\pritesh.jpg";
     driver.findElement(By.xpath ( "//input[contains(@name,'image')]")).click();
     Thread.sleep(1000);
     
     Robot robot = new Robot();  // robot class is helpful  here in performing the image upload  
     // we can also use AutoIT for windows file upload but instead of making task tough by downloading Autoit and all , 
     // better to use robot class
     robot.delay(2000);
     // C:\\Users\\Pritesh Gunjan\\Desktop\\Seleniumfile\\pritesh.jpg -->here you can give your path of the image you want to upload
     StringSelection stringselection =  new StringSelection( " C:\\Users\\Pritesh Gunjan\\Desktop\\Seleniumfile\\pritesh.jpg");
     Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringselection, owner );
     robot.setAutoDelay(2000);
     robot.keyPress(KeyEvent.VK_CONTROL);
     robot.keyPress(KeyEvent.VK_V);
     
     robot.keyRelease(KeyEvent.VK_CONTROL);
     robot.keyRelease(KeyEvent.VK_V);
     
     robot.setAutoDelay(2000);
     
     robot.keyPress(KeyEvent.VK_ENTER);
     robot.keyRelease(KeyEvent.VK_ENTER);
     robot.setAutoDelay(2000);
}

@Then("^: user mouse hover on New Contact Link to confirm the contact is added$")
public void _user_mouse_hover_on_New_Contact_Link_to_confirm_the_contact_is_added() throws Throwable {
    // Express the Regexp above with the code you wish you had
	driver.findElement(By.xpath (  "(//span[@class='item-text'])[3]")).click();
}


@Then("^: click on save buttton$")
public void _click_on_save_buttton() throws Throwable {
  driver.findElement(By.xpath("//i[@class='save icon']")).click();
 
  
}


@Then("^: Close the browser$")
public void _Close_the_browser() throws Throwable {
	Thread.sleep(5000);
	driver.close();
	
    
}




}
