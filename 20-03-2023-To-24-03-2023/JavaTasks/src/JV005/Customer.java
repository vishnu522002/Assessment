package JV005;

import java.util.Arrays;
import java.util.Scanner;

public class Customer {

	static Double outstandingBills[] = new Double[10];
	
	public static void addOutstandingBill()
	{
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter the new Otstanding bill..");
		Double newOustandingBill = scan.nextDouble();
		
		try
		{
			if(addItem(outstandingBills, newOustandingBill))
			{
				System.out.println("Added successfully..");
				return;
			}
			throw new OutstandingException();
		}
		catch(Exception exe)
		{
			System.out.println(exe);
			System.out.print("Please pay the existing bill to continue.");
			System.out.println(Arrays.toString(outstandingBills));
			
			System.out.println("Tell the index from given array to pay");
			int existingBill = scan.nextInt();
			
			outstandingBills[existingBill] = null;
			System.out.println("Paid succesfully");
			
			System.out.println("Now continue to add..");
			newOustandingBill = scan.nextDouble();
			
			if(addItem(outstandingBills, newOustandingBill))
			{
				System.out.println("Added successfully..");
				return;
			}
			System.out.println("Sorry, Try again");
		}
	}
	
	// Method to add an item to existing array and it returns true if successfully addedd
	public static boolean addItem(Double[] arr, Double newItem)
	{
		for(int i=0;i<arr.length;i++)
		{
			if(arr[i]==null)
			{
				arr[i] = newItem;
				return true;
			}
		}
		return false;
	}
	
	public static void main(String[] args) {
		addOutstandingBill();
	}
}
