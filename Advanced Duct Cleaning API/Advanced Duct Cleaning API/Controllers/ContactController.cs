using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using System.Drawing;

namespace Advanced_Duct_Cleaning_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ContactController : ControllerBase
	{
		[HttpPost]
		public async Task<ActionResult> SendContactForm(FormSubmissionDTO form)
		{
			if (ModelState.IsValid && form.ServiceDesired.Count > 0)
			{
				try
				{
					var emailMessage = new MimeMessage();
					MailboxAddress from = new MailboxAddress($"Advanced Duct Cleaning Website", "contact@dylanbenedict.dev");
					emailMessage.From.Add(from);

					MailboxAddress to = new MailboxAddress("Advanced Duct Cleaning LLC", "advancedductcleaning1@gmail.com");
					emailMessage.To.Add(to);

					emailMessage.Subject = "Quote Requested";

                         var body = new TextPart("html")
                         {
                              Text = @$"
                              <html>
                                   <head>
                                       <style>
                                         .requestContainer {{
                                           display: block;
                                           width: 100%;
                                           max-width: 100%;
                                         }}

                                         .requestContainer .field {{
                                           display: block;
                                           width: 100%;
                                           word-break: break-all;
                                           margin-bottom: 15px;
                                         }} 

                                         .requestContainer .field .label {{
                                           font-size: 12px;
                                           color: #1b70ba;
                                           text-transform: uppercase;
                                           margin-bottom: 3px;
                                         }}

                                         .requestContainer .field .value {{
                                           font-size: 18px;
                                           color: #000;
                                         }}
                                       </style>
                                   </head>
                                   <body>
                                       <div class=""requestContainer"">
                                         <div class=""field"">
                                           <div class=""label"">First Name</div>
                                           <div class=""value"">{form.FirstName}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Last Name</div>
                                           <div class=""value"">{form.LastName}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Email</div>
                                           <div class=""value""><a href=""mailto:{form.Email}"">{form.Email}</a></div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Address</div>
                                           <div class=""value"">{form.Address}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">City</div>
                                           <div class=""value"">{form.City}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Zip</div>
                                           <div class=""value"">{form.Zip}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Phone Number</div>
                                           <div class=""value"">{form.PhoneNumber}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">How Did You Find Us</div>
                                           <div class=""value"">{form.How ?? "N/A"}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Service Desired</div>
                                           <div class=""value"">
                                             <ul>
                                                  <li>{string.Join("</li><li>", form.ServiceDesired)}</li>
                                             </ul>
                                           </div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Type of Property</div>
                                           <div class=""value"">{form.TypeOfProperty}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Number of Furnaces</div>
                                           <div class=""value"">{form.NumberOfFurnaces}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Style of Home</div>
                                           <div class=""value"">{form.StyleOfHome}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Foundation</div>
                                           <div class=""value"">{form.Foundation}</div>
                                         </div>
                                         <div class=""field"">
                                           <div class=""label"">Square Footage</div>
                                           <div class=""value"">{form.SquareFootage} ft<sup>2</sup></div>
                                         </div>
                                       </div>
                                       <p>***Do not reply to this email. Send a new email to <a href=""mailto:{form.Email}"">{form.Email}</a>***</p>
                                   </body>
                              </html>"
				     };

                          emailMessage.Body = body;

					using (var client = new MailKit.Net.Smtp.SmtpClient())
					{
						client.Connect("hgws5.win.hostgator.com", 25, false);
						client.Authenticate("contact@dylanbenedict.dev", "628?\\^*BLtaqp");
						await client.SendAsync(emailMessage);
						client.Disconnect(true);
						client.Dispose();
					}

                         return Ok();
				} catch (Exception ex)
				{
					return BadRequest(ex.Message);
				}
			}
			return BadRequest();
		}
	}
}
