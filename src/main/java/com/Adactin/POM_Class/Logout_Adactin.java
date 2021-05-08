package com.Adactin.POM_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Logout_Adactin {

public WebDriver driver;

@FindBy(id="logout")
private WebElement logout;

public WebDriver getDriver() {
	return driver;
}

public WebElement getLogout() {
	return logout;
}

public Logout_Adactin(WebDriver driver2) {
	this.driver=driver2;
	PageFactory.initElements(driver, this);
}
	
	
}

