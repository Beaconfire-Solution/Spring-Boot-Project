package com.example.timesheetserver.Controller;

import com.example.timesheetserver.DAO.TimesheetRepository;
import com.example.timesheetserver.Domain.Document;
import com.example.timesheetserver.Domain.Profile;
import com.example.timesheetserver.Domain.Timesheet;
import com.example.timesheetserver.Domain.Timesheets;
import com.example.timesheetserver.Service.ProfileService;
import com.example.timesheetserver.Service.TimesheetService;
import com.example.timesheetserver.Util.CurrentTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/timesheet")
public class TimesheetController {

    @Autowired
    TimesheetService timesheetService;

    @Autowired
    ProfileService profileService;

    @CrossOrigin
    @GetMapping("/timesheets/{id}")
    public ResponseEntity getTimesheets(@PathVariable String id){
        //System.out.println(timesheetService.findByProfile_Id(id));
        return ResponseEntity.ok(timesheetService.findByProfile_Id(id));
    }

    @CrossOrigin
    @GetMapping("/timesheets")
    public ResponseEntity getAllTimesheets(){
        System.out.println(timesheetService.findAll());
        return ResponseEntity.ok(timesheetService.findAll());
    }

    @CrossOrigin
    @PostMapping("/timesheets/{id}")
    public ResponseEntity saveTimesheets(@RequestBody Timesheet timesheet){
        timesheetService.save(timesheet);
        return ResponseEntity.ok("Save Succeed!");
    }

    @CrossOrigin
    @GetMapping("/defaulttimesheets")
    public ResponseEntity generateTimesheet(){
        List<Profile> profileList = profileService.findAll();
        for(Profile p : profileList){
            Timesheets weeklyTimesheet = new Timesheets();
            weeklyTimesheet.setWeekEnding(CurrentTime.getCurrentTime());
            weeklyTimesheet.setTotalCompensatedHours(0);
            weeklyTimesheet.setTotalBillingHours(0);
            weeklyTimesheet.setSubmissionStatus("Not Started");
            weeklyTimesheet.setApprovedStatus("N/A");
            weeklyTimesheet.setFloatingDayUsed(0);
            weeklyTimesheet.setVacationDayUse(0);
            weeklyTimesheet.setHolidayUsed(0);
            weeklyTimesheet.setDailyTimesheets(p.getTemplate());
            Document d = new Document();
            d.setTitle("");
            d.setType("");
            d.setUploadedBy(p.getName());
            d.setUploadedTime("");
            d.setUrl("");
            weeklyTimesheet.setDocument(d);
            timesheetService.save(Timesheet.builder().profile(p).weeklyTimesheets(weeklyTimesheet).build());
        }

        return ResponseEntity.ok("Generation succeed!");

    }





}