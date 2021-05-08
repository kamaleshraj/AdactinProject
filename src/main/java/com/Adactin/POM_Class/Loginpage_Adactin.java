package com.Adactin.POM_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Loginpage_Adactin {

	public WebDriver driver;
	
	@FindBy(id="username")
	private WebElement uname;
	
	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getUname() {
		return uname;
	}

	public WebElement getPwd() {
		return pwd;
	}

	public WebElement getLogin() {
		return login;
	}

	@FindBy(id="password")
	private WebElement pwd;
	
	@FindBy(id="login")
	private WebElement login;
	
public	Loginpage_Adactin(WebDriver driver2) {
	this.driver=driver2;
	PageFactory.initElements(driver, this);
}
	
	
	
	
}
