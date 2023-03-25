package JV002;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		// New user details
		Gpay gpayUser = new Gpay(123456L,2566.24,142434,"Kanthasamy");
		
		Scanner scanner = new Scanner(System.in);
		
		// Getting the UPI pin as input
		System.out.println("Enter the upi pin:");
		int upiPin = scanner.nextInt();
		
		// Validating the upiPin
		if(upiPin == gpayUser.getUpiPin())
		{
			System.out.println("Processing...");
		}
		else
		{
			System.out.println("You entered a wrong UPI pin.");
		}
	}
}
