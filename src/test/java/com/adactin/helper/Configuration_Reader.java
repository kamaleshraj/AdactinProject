package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Configuration_Reader {
	
	public static Properties p;
	
	public Configuration_Reader() throws Throwable {
		
		
		File f = new File("C:\\Users\\KKAMALESHRAJ\\eclipse-workspace\\Adactin_Project_Try\\src\\test\\java\\com\\adactin\\properties\\configuration.properties");
	
		FileInputStream fis = new FileInputStream(f);
		
		p = new Properties();
		
		//load
		p.load(fis);
	}
	
	public  String getBrowser() {

		String browser = p.getProperty("browser");
		return browser;
	}

	public  String getUrl() {

		String url = p.getProperty("url");
		return url;
	}
	
	public String getUsername() {

		String uname = p.getProperty("Username");
		return uname;
	}
	
	public  String getAddress() {

		String address = p.getProperty("Address");
		return address;
	}
	
	public String getCcnum() {

		String ccnum = p.getProperty("Ccnum");
		return ccnum;
		}
	
	public  String getCvvnum() {

		String cvvnum = p.getProperty("Cvvnum");
		return cvvnum;
	}
	
	
	
	
	
	
}
