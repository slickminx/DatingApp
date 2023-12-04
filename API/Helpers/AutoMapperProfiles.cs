﻿using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.SignalR;

namespace API;

public class AutoMapperProfiles : Profile
{

    public AutoMapperProfiles()
    {
        CreateMap<AppUser, MemberDto>()
            .ForMember(dest=>dest.PhotoUrl, opt=>opt.MapFrom(src=>src.Photos.FirstOrDefault(x=>x.IsMain).Url))
            .ForMember(dest=>dest.Age, opt=>opt.MapFrom(src=>src.DateofBirth.CalculateAge()));
        CreateMap<Photo, PhotoDto>();
    }
}
