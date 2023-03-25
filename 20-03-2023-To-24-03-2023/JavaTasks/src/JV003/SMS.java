package JV003;

import java.util.Scanner;

public class SMS extends Transaction{
	
	// Sms Equiry numbers
	static int BalanceEnquiryNumber = 1901;
	static int rechargeNumber = 2245;
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		SMS userAction = new SMS();
		
		System.out.println("* For Balance enquiry-1901"
						+ "\n* For recharge-2245"
						+ "\nEnter the number to proceed:");
		int smsNumber = scan.nextInt();
		
		// Checking whether user typed number == given smsNumber
		if(smsNumber == BalanceEnquiryNumber)
		{
			userAction.balanceEnquiry();
		}
		else if(smsNumber == rechargeNumber)
		{
			userAction.recharge();
		}
		else
		{
			System.out.println("Sorry, you entered wrong number.");
		}
	}

}
