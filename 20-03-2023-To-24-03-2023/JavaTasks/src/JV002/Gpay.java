package JV002;

public class Gpay {

	private Long accNumber;
	private double accBalance;
	private int upiPin;
	private String name;
		
	public Gpay() {}
	
	public Gpay(Long accNumber, double accBalance, int upiPin, String name) {
		super();
		this.accNumber = accNumber;
		this.accBalance = accBalance;
		this.upiPin = upiPin;
		this.name = name;
	}
	public Long getAccNumber() {
		return accNumber;
	}
	public void setAccNumber(Long accNumber) {
		this.accNumber = accNumber;
	}
	public double getAccBalance() {
		return accBalance;
	}
	public void setAccBalance(double accBalance) {
		this.accBalance = accBalance;
	}
	public int getUpiPin() {
		return upiPin;
	}
	public void setUpiPin(int upiPin) {
		this.upiPin = upiPin;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Gpay [accNumber=" + accNumber + ", accBalance=" + accBalance + ", upiPin=" + upiPin + ", name=" + name
				+ "]";
	}
	
}
