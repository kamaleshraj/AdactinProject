package com.Adactin.POM_Class;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_Hotel_Adactin {

	public WebDriver driver;
	
	@FindBy(id = "radiobutton_0")
	private WebElement radio_btn;
	
	public WebDriver getDriver() {
		return driver;
	}
	public WebElement getRadio_btn() {
		return radio_btn;
	}
	public WebElement getContinue_btn() {
		return continue_btn;
	}

	@FindBy(id="continue")
	private WebElement continue_btn;
	
	
	public Select_Hotel_Adactin(WebDriver driver2) {
		this.driver= driver2;
		PageFactory.initElements(driver, this);
	}
	
	
}
