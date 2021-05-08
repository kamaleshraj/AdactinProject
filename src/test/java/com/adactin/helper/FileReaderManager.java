package com.adactin.helper;

public class FileReaderManager {

	
	public static FileReaderManager getInstance() {

		FileReaderManager helper = new FileReaderManager();
		
		return helper;
	}
	
	public  Configuration_Reader getInstanceCr() throws Throwable {

		Configuration_Reader reader = new Configuration_Reader();
		
		return reader;
	}
}
