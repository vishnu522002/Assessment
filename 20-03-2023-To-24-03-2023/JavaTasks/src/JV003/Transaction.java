package JV003;

public class Transaction extends KYC {
	
	// For Balance enquiry
	public void balanceEnquiry()
	{
		System.out.println("Your current balance: "+this.getAccBalance());
	}
	
	// For recharges
	public void recharge()
	{
		System.out.println("Your recharge is processing...");
	}
	
	// For booking tickets
	public void bookTicket()
	{
		System.out.println("Your ticket booking is processing...");
	}
}
