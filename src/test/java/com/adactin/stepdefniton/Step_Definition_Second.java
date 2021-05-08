package com.adactin.stepdefniton;

import org.openqa.selenium.WebDriver;

import com.Adactin.Base_Class.Base_class;
import com.Adactin.POM_Class.Book_Hotel_Adactin;
import com.Adactin.POM_Class.Logout_Adactin;
import com.Adactin.POM_Class.My_Iternary_Adactin;
import com.Adactin.POM_Class.Search_Hotel_Adactin;
import com.Adactin.POM_Class.Select_Hotel_Adactin;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.runner.Test_Runner_Second;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition_Second extends Base_class {

	public static WebDriver driver = Test_Runner_Second.driver;
//	public static Loginpage_Adactin lp = new Loginpage_Adactin(driver);

	public static PageObjectManager pom = new PageObjectManager(driver);

	public static Search_Hotel_Adactin sh = new Search_Hotel_Adactin(driver);
	public static Select_Hotel_Adactin sel = new Select_Hotel_Adactin(driver);
	public static Book_Hotel_Adactin bh = new Book_Hotel_Adactin(driver);
	public static My_Iternary_Adactin myit = new My_Iternary_Adactin(driver);
	public static Logout_Adactin logout = new Logout_Adactin(driver);

	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {

		String url = FileReaderManager.getInstance().getInstanceCr().getUrl();
		get_To(url);
		// get_To("https://adactinhotelapp.com/");
	}

	// @When("^user Enter The Username in Username Field$")
	// public void user_Enter_The_Username_in_Username_Field() throws Throwable {

	// String username =
	// FileReaderManager.getInstance().getInstanceCr().getUsername();
	// inputValueElement(username, pom.getInstanceLogin().getUname());

	// }

	// @When("^user Enter The Password in Password Field$")
	// public void user_Enter_The_Password_in_Password_Field() throws Throwable {
	// inputValueElement("123456", pom.getInstanceLogin().getPwd());

	// }

	@When("^user Enter The \"([^\"]*)\" in Username Field$")
	public void user_Enter_The_in_Username_Field(String Username) throws Throwable {
		inputValueElement(Username, pom.getInstanceLogin().getUname());

	}

	@When("^user Enter The \"([^\"]*)\" in Password Field$")
	public void user_Enter_The_in_Password_Field(String Password) throws Throwable {
		inputValueElement(Password, pom.getInstanceLogin().getPwd());

	}

	@Then("^user Click On The Login Button And It Navigates To Search Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page() throws Throwable {

		clickOnElement(pom.getInstanceLogin().getLogin());

		Thread.sleep(2000);

	}

	@When("^user Select The Location in Location Textbox$")
	public void user_Select_The_Location_in_Location_Textbox() throws Throwable {

		dropdown(sh.getLocation(), "London", "byvisibleText");
		Thread.sleep(1000);
	}

	@When("^user Select The Hotel Name in Hotel Textbox$")
	public void user_Select_The_Hotel_Name_in_Hotel_Textbox() throws Throwable {

		// clickOnElement(sh.getHotels());
		dropdown(sh.getHotels(), "Hotel Hervey", "byvisibleText");
		Thread.sleep(1000);
	}

	@When("^user Select The Roomtype in Roomtype Textbox$")
	public void user_Select_The_Roomtype_in_Roomtype_Textbox() throws Throwable {

		clickOnElement(sh.getRoomtype());
		dropdown(sh.getRoomtype(), "Double", "byvalue");

	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {

		clickOnElement(sh.getRoomnum());
		dropdown(sh.getRoomnum(), "2", "byValue");
	}

	@When("^user Gives The Date Of Checkin$")
	public void user_Gives_The_Date_Of_Checkin() throws Throwable {
		clear(sh.getDatein());
		inputValueElement("15/04/2021", sh.getDatein());

	}

	@When("^user Gives The Date of Checkout$")
	public void user_Gives_The_Date_of_Checkout() throws Throwable {

		clear(sh.getDateout());
		inputValueElement("17/04/2021", sh.getDateout());

	}

	@When("^user Select The Adult Count$")
	public void user_Select_The_Adult_Count() throws Throwable {

		dropdown(sh.getAdult(), "2", "byValue");

	}

	@When("^user Select The Children Count$")
	public void user_Select_The_Children_Count() throws Throwable {

		dropdown(sh.getChild(), "3", "byValue");

	}

	@Then("^user Click On The Search Button And It Navigates To Select Hotel Page$")
	public void user_Click_On_The_Search_Button_And_It_Navigates_To_Select_Hotel_Page() throws Throwable {

		clickOnElement(sh.getSubmit());
		Thread.sleep(2000);
	}

	@When("^user Select The Particular Hotel By Radiobutton$")
	public void user_Select_The_Particular_Hotel_By_Radiobutton() throws Throwable {

		clickOnElement(sel.getRadio_btn());
	}

	@Then("^user Click On Continue Button And It Navigates To Book Hotel Page$")
	public void user_Click_On_Continue_Button_And_It_Navigates_To_Book_Hotel_Page() throws Throwable {

		clickOnElement(sel.getContinue_btn());
		Thread.sleep(2000);
	}

	@When("^user Enter The First Name in First Name Textbox$")
	public void user_Enter_The_First_Name_in_First_Name_Textbox() throws Throwable {

		inputValueElement("Kamalesh", bh.getFname());
	}

	@When("^user Enter The Last Name in Last Name Textbox$")
	public void user_Enter_The_Last_Name_in_Last_Name_Textbox() throws Throwable {

		inputValueElement("Raj", bh.getLname());

	}

	@When("^user Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {

		String address = FileReaderManager.getInstance().getInstanceCr().getAddress();
		inputValueElement(address, pom.getInstancebook().getAddress());

	}

	@When("^user Enter The Credit Card Number$")
	public void user_Enter_The_Credit_Card_Number() throws Throwable {

		String ccnum = FileReaderManager.getInstance().getInstanceCr().getCcnum();
		inputValueElement(ccnum, pom.getInstancebook().getCcnum());
	}

	@When("^user Select The Credit Card Type$")
	public void user_Select_The_Credit_Card_Type() throws Throwable {

		dropdown(bh.getCctype(), "VISA", "byValue");
	}

	@When("^user Select The Expiry Month$")
	public void user_Select_The_Expiry_Month() throws Throwable {

		dropdown(bh.getExpmonth(), "3", "byValue");

	}

	@When("^user Select The Expiry Year$")
	public void user_Select_The_Expiry_Year() throws Throwable {
		dropdown(bh.getExpyear(), "2022", "byvalue");

	}

	@When("^user Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {

		String cvvnum = FileReaderManager.getInstance().getInstanceCr().getCvvnum();
		inputValueElement(cvvnum, pom.getInstancebook().getCvvnum());
	}

	@Then("^user Click On The Book Now Button And Navigates To Confirmation Page$")
	public void user_Click_On_The_Book_Now_Button_And_Navigates_To_Confirmation_Page() throws Throwable {

		clickOnElement(bh.getBooknow());

		Thread.sleep(2000);
	}

	@Then("^user Click On The My Iternary Button And Navigates To Booked Iternary Page$")
	public void user_Click_On_The_My_Iternary_Button_And_Navigates_To_Booked_Iternary_Page() throws Throwable {

		Thread.sleep(4000);
		clickOnElement(myit.getIternary());
		Thread.sleep(4000);
	}

	@Then("^user Click On The Logout Button And Navigate to Homepage$")
	public void user_Click_On_The_Logout_Button_And_Navigate_to_Homepage() throws Throwable {

		clickOnElement(logout.getLogout());
		Thread.sleep(2000);

	}

}
