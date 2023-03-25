package JV005;

public class OutstandingException extends Exception {

	public OutstandingException()
	{
		super("#OutstandingException you already have maximum outstanding bills.");
	}
}
