package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Adactin.Base_Class.Base_class;
import com.adactin.helper.FileReaderManager;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//featurefile" , glue ="com.adactin.stepdefniton",
monochrome = true,
dryRun = false,
strict = true,
tags= ("@Smoketest, @Sanitytest"),
plugin = {"html:Report/HTML_Report",
		"pretty",
		"json:Reports/jsonReport.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/Extentreport.html"
}
)

public class Test_Runner_Second {

	public static WebDriver driver;
	
	@BeforeClass
	public static void set_Up() throws Throwable {
		
		String browser = FileReaderManager.getInstance().getInstanceCr().getBrowser();

		driver = Base_class.launchBrowser(browser);
			
	}
	
	@AfterClass
	
	public static void tear_Down() {

		driver.close();
	}
}
	
	
	

