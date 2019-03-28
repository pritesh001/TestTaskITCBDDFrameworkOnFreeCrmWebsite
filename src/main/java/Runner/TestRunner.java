package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features ="C:/Gitlab/TestTaskITCBDDFrameworkOnFreeCrmWebsite/src/main/java/Features"
		
		, glue = { "StepDefinitions"}
		
		, format = {"pretty", "html:test-output" , "json:json_output/cucumber.json" , "junit:junit_xml/cucumber.xml"} ,
		
		strict = true ,	 	// it will check if any step is not defined in  step definition file 
		dryRun = false
		
		)

public class TestRunner {

}
