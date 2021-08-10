package com.example.profileserver.Controller;

import com.example.profileserver.Domain.Contact;
import com.example.profileserver.Domain.Profile;
import com.example.profileserver.Service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    ProfileService profileService;

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity getUserProfile(@PathVariable String id){
        return ResponseEntity.ok(profileService.findById(id));
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity updateProfile(@PathVariable String id, @RequestBody Contact contact){
        profileService.updateContact(id, contact);
        return ResponseEntity.ok("Save Succeed!");
    }


}
