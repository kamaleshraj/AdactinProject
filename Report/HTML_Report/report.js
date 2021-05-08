$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin_Two.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Launch Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;launch-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cUsername\u003e\" in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"\u003cPassword\u003e\" in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;launch-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;launch-application;;1"
    },
    {
      "cells": [
        "AAA",
        "123"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;launch-application;;2"
    },
    {
      "cells": [
        "BBB",
        "456"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;launch-application;;3"
    },
    {
      "cells": [
        "Kamaleshraj",
        "123456"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;launch-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Launch Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;launch-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"AAA\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"123\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Second.user_Launch_The_Application()"
});
formatter.result({
  "duration": 2987608600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Second.user_Enter_The_in_Username_Field(String)"
});
formatter.result({
  "duration": 205425700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Second.user_Enter_The_in_Password_Field(String)"
});
formatter.result({
  "duration": 144651000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2409845400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Launch Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;launch-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"BBB\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"456\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Second.user_Launch_The_Application()"
});
formatter.result({
  "duration": 224713300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBB",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Second.user_Enter_The_in_Username_Field(String)"
});
formatter.result({
  "duration": 121527100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Second.user_Enter_The_in_Password_Field(String)"
});
formatter.result({
  "duration": 109227500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2334483500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Launch Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;launch-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Kamaleshraj\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Enter The \"123456\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Second.user_Launch_The_Application()"
});
formatter.result({
  "duration": 222619000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kamaleshraj",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Second.user_Enter_The_in_Username_Field(String)"
});
formatter.result({
  "duration": 123172600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 16
    }
  ],
  "location": "Step_Definition_Second.user_Enter_The_in_Password_Field(String)"
});
formatter.result({
  "duration": 113951000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2630087200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Searching Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;searching-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Sanitytest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Select The Location in Location Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Select The Hotel Name in Hotel Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select The Roomtype in Roomtype Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Gives The Date Of Checkin",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Gives The Date of Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Select The Adult Count",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Select The Children Count",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Click On The Search Button And It Navigates To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Location_in_Location_Textbox()"
});
formatter.result({
  "duration": 1188759700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Hotel_Name_in_Hotel_Textbox()"
});
formatter.result({
  "duration": 1111764700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Roomtype_in_Roomtype_Textbox()"
});
formatter.result({
  "duration": 192802300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 195684900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Gives_The_Date_Of_Checkin()"
});
formatter.result({
  "duration": 138677900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Gives_The_Date_of_Checkout()"
});
formatter.result({
  "duration": 135138600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Adult_Count()"
});
formatter.result({
  "duration": 146310000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Children_Count()"
});
formatter.result({
  "duration": 120464100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Click_On_The_Search_Button_And_It_Navigates_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 2457889300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Selecting Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;selecting-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Sanitytest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user Select The Particular Hotel By Radiobutton",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user Click On Continue Button And It Navigates To Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Particular_Hotel_By_Radiobutton()"
});
formatter.result({
  "duration": 54476900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Click_On_Continue_Button_And_It_Navigates_To_Book_Hotel_Page()"
});
formatter.result({
  "duration": 2428624200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Giving User details",
  "description": "",
  "id": "hotel-booking-in-adactin-application;giving-user-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Sanitytest"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "user Enter The First Name in First Name Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user Enter The Last Name in Last Name Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Enter The Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user Click On The Book Now Button And Navigates To Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Second.user_Enter_The_First_Name_in_First_Name_Textbox()"
});
formatter.result({
  "duration": 95086400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Enter_The_Last_Name_in_Last_Name_Textbox()"
});
formatter.result({
  "duration": 74551000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 104326500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Enter_The_Credit_Card_Number()"
});
formatter.result({
  "duration": 90137400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 116670300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 112849300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 125859600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 75649000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Second.user_Click_On_The_Book_Now_Button_And_Navigates_To_Confirmation_Page()"
});
formatter.result({
  "duration": 2089812500,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "My Iternary Navigation",
  "description": "",
  "id": "hotel-booking-in-adactin-application;my-iternary-navigation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@Sanitytest"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "user Click On The My Iternary Button And Navigates To Booked Iternary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Second.user_Click_On_The_My_Iternary_Button_And_Navigates_To_Booked_Iternary_Page()"
});
formatter.result({
  "duration": 8679039600,
  "status": "passed"
});
});