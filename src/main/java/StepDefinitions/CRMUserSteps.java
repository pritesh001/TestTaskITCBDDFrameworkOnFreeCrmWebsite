package StepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CRMUserSteps 


{

	WebDriver driver  ;
	
	public void setsystemproperty()
	{
		
		System.setProperty("webdriver.chrome.driver", "C:/selenium chrome driver/chromedriver_win32/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
		
	}
	
	
	
	
	

}
