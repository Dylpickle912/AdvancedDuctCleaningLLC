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
		public List<string> ServiceDesired { get; set; }
		public string TypeOfProperty { get; set; }
		public int NumberOfFurnaces { get; set; }
		public string StyleOfHome { get; set; }
		public string Foundation { get; set; }
		public int SquareFootage { get; set; }
	}

	public class DesiredService
	{
		public const string AirDuctCleaning = "Air Duct Cleaning";
		public const string DryerVentCleaning = "Dryer Vent Cleaning";
		public const string AirDuctSanitation = "Air Duct Sanitation";
	}
}
