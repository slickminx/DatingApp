﻿using System.ComponentModel.DataAnnotations;

namespace API;

public class RegisterDto
{
    [Required]
    public string Username { get; set; }

    [Required] public string KnownAs { get; set; }
    [Required] public string Gender { get; set; }
    [Required] public DateOnly? DateofBirth { get; set; }  //optional to make required work
    [Required] public string City { get; set; }
    [Required] public string Country { get; set; }
    
    [Required]
    [StringLength(8, MinimumLength = 4)]
    public string Password { get; set; }
}
