package JV007;

import java.util.Arrays;
import java.util.Scanner;

public class Customer {

	int loanAmount[] = {12000, 15000, 30000, 40000, 50000, 65000, 75000};
	Scanner scan = new Scanner(System.in);
	
	public void sliceLoanAmount()
	{
		System.out.println("Enter start index..");
		int start = scan.nextInt();
		System.out.println("Enter end index..");
		int end = scan.nextInt();
		
		int [] slicedArr = sliceArray(loanAmount, start, end);
		System.out.println(Arrays.toString(slicedArr));
	}
	
	public int[] sliceArray(int []arr, int start, int end)
	{
		int[] newArr = new int[(end-start)+1];
		for(int i=start,j=0;i<=end;i++,j++)
		{
			newArr[j]=arr[i];
		}
		return newArr;
	}
	
	public static void main(String[] args) {
		
		Customer customer = new Customer();
		customer.sliceLoanAmount();
	}
}
