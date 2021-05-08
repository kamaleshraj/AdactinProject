package com.Adactin.POM_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class My_Iternary_Adactin {

	public WebDriver driver;
	
	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getIternary() {
		return iternary;
	}

	@FindBy(xpath = "//input[@id='my_itinerary']")
	private WebElement iternary;
	
	public My_Iternary_Adactin(WebDriver driver2) {
		this.driver= driver2;
		PageFactory.initElements(driver, this);
	}
	
	
}
