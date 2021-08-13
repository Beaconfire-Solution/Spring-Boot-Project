package com.example.timesheetserver.Service;

import com.example.timesheetserver.DAO.ProfileRepository;
import com.example.timesheetserver.DAO.TimesheetRepository;
import com.example.timesheetserver.Domain.DailyTimesheet;
import com.example.timesheetserver.Domain.Profile;
import com.example.timesheetserver.Domain.Timesheet;
import com.example.timesheetserver.Domain.Timesheets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;

@Service
public class TimesheetService {

    @Autowired
    TimesheetRepository timesheetRepository;

    @Autowired
    ProfileRepository profileRepository;

    public List<Timesheet> findByProfile_Id(String id){
        return timesheetRepository.findByProfile_Id(id);
    }
    public List<Timesheet> findAll(){
        return timesheetRepository.findAll();
    }

    public void updateTimesheet(String id, Timesheets weeklyTimesheets){
        String weekEnding = weeklyTimesheets.getWeekEnding();
        Timesheet timesheet = timesheetRepository.findByProfile_IdAndWeeklyTimesheets_WeekEnding(id, weekEnding);
            Optional<Profile> opt = profileRepository.findById(id);

            for(DailyTimesheet dailyTimesheet: timesheet.getWeeklyTimesheets().getDailyTimesheets()){
                if(dailyTimesheet.isFloatingDay()){
                    opt.ifPresent(profile -> {
                        profile.setRemainingFloatingDay(profile.getRemainingFloatingDay() - 1);
                        profileRepository.save(profile);
                    });
                }
                if(dailyTimesheet.isVacation()){
                    opt.ifPresent(profile -> {
                        profile.setRemainingVacationDay(profile.getRemainingVacationDay() - 1);
                        profileRepository.save(profile);
                    });
                }
            }

            if(weeklyTimesheets.getDocument().getUrl() != null){
                if(weeklyTimesheets.getDocument().getType().equals("Approved")){
                    timesheet.getWeeklyTimesheets().setSubmissionStatus("complete");
                }
                timesheet.getWeeklyTimesheets().setSubmissionStatus("Incomplete");
            }
            else{
                timesheet.getWeeklyTimesheets().setSubmissionStatus("Incomplete");
            }

            timesheet.getWeeklyTimesheets().setDailyTimesheets(weeklyTimesheets.getDailyTimesheets());

            timesheetRepository.save(timesheet);
    }

    public Timesheet findByProfile_IdAndWeeklyTimesheets_WeekEnding(String id, String weekEnding){
        return timesheetRepository.findByProfile_IdAndWeeklyTimesheets_WeekEnding(id, weekEnding);
    }
    public void save(Timesheet timesheet){
        timesheetRepository.save(timesheet);
    }
}
