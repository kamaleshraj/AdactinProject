package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.Adactin.POM_Class.Book_Hotel_Adactin;
import com.Adactin.POM_Class.Loginpage_Adactin;
import com.Adactin.POM_Class.Search_Hotel_Adactin;

public class PageObjectManager {

	public WebDriver driver;

	private Loginpage_Adactin login;

	private Search_Hotel_Adactin search;

	// private Select_Hotel_Adactin select;

	private Book_Hotel_Adactin book;

	// private My_Iternary_Adactin myit;

	public PageObjectManager(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	public Loginpage_Adactin getInstanceLogin() {

		login = new Loginpage_Adactin(driver);
		return login;

	}

	public Search_Hotel_Adactin getInstanceSearch() {

		search = new Search_Hotel_Adactin(driver);
		return search;
	}

	public Book_Hotel_Adactin getInstancebook() {

		book = new Book_Hotel_Adactin(driver);
		return book;

	}

}
