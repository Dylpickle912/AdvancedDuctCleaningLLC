namespace Advanced_Duct_Cleaning_API
{
	public class FormSubmissionDTO
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public string Address { get; set; }
		public string City { get; set; }
		public int Zip { get; set; }
		public string PhoneNumber { get; set; }
		public string? How { get; set; }
		public string ServiceDesired { get; set; }
		public string TypeOfProperty { get; set; }
		public int NumberOfFurnaces { get; set; }
		public string StyleOfHome { get; set; }
		public string Foundation { get; set; }
	}
}
