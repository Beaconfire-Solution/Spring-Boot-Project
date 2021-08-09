package com.example.timesheetserver.Service;

import com.example.timesheetserver.DAO.ProfileRepository;
import com.example.timesheetserver.Domain.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    @Autowired
    ProfileRepository profileRepository;

    public List<Profile> findAll(){
        return profileRepository.findAll();
    }
}
