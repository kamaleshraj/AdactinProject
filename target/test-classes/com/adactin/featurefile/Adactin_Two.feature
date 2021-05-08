Feature: Hotel Booking In Adactin Application


@Smoketest
Scenario Outline: Launch Application

Given user Launch The Application
When user Enter The "<Username>" in Username Field
And user Enter The "<Password>" in Password Field
Then user Click On The Login Button And It Navigates To Search Hotel Page
	Examples:

	|Username|Password|
	|AAA|123|
	|BBB|456|
	|Kamaleshraj|123456|

@Sanitytest
Scenario: Searching Hotel

When user Select The Location in Location Textbox
And user Select The Hotel Name in Hotel Textbox
And user Select The Roomtype in Roomtype Textbox
And user Select The Number Of Rooms
And user Gives The Date Of Checkin
And user Gives The Date of Checkout
And user Select The Adult Count
And user Select The Children Count
Then user Click On The Search Button And It Navigates To Select Hotel Page


@Sanitytest
Scenario: Selecting Hotel

When user Select The Particular Hotel By Radiobutton
Then user Click On Continue Button And It Navigates To Book Hotel Page

@Sanitytest
Scenario: Giving User details

When user Enter The First Name in First Name Textbox
And user Enter The Last Name in Last Name Textbox
And user Enter The Billing Address
And user Enter The Credit Card Number
And user Select The Credit Card Type
And user Select The Expiry Month 
And user Select The Expiry Year
And user Enter The CVV Number
Then user Click On The Book Now Button And Navigates To Confirmation Page

@Sanitytest
Scenario: My Iternary Navigation

Then user Click On The My Iternary Button And Navigates To Booked Iternary Page

@Regressiontest
Scenario: Logging out Page

Then user Click On The Logout Button And Navigate to Homepage
 

