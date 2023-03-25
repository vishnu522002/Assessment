package JV001;

public class Customer {
	
	private String customerName;
	private String PAN;
	private Long Aadhaar;
	private String profession;
	private double cibilScore;
	private Long contact;
	
	public Customer() {
	
	}
	
	public Customer(String customerName, String pAN, Long aadhaar, String profession, double cibilScore, Long contact) {
		super();
		this.customerName = customerName;
		PAN = pAN;
		Aadhaar = aadhaar;
		this.profession = profession;
		this.cibilScore = cibilScore;
		this.contact = contact;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getPAN() {
		return PAN;
	}
	public void setPAN(String pAN) {
		PAN = pAN;
	}
	public Long getAadhaar() {
		return Aadhaar;
	}
	public void setAadhaar(Long aadhaar) {
		Aadhaar = aadhaar;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public double getCibilScore() {
		return cibilScore;
	}
	public void setCibilScore(double cibilScore) {
		this.cibilScore = cibilScore;
	}
	public Long getContact() {
		return contact;
	}
	public void setContact(Long contact) {
		this.contact = contact;
	}
	
}
