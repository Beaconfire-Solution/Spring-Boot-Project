package com.example.timesheetserver.Service;

import com.example.timesheetserver.DAO.TimesheetRepository;
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

    public List<Timesheet> findByProfile_Id(String id){
        return timesheetRepository.findByProfile_Id(id);
    }
    public List<Timesheet> findAll(){
        return timesheetRepository.findAll();
    }

    public void updateTimesheet(String id, Timesheets weeklyTimesheets){
        Optional<Timesheet> opt = timesheetRepository.findById(id);
        opt.ifPresent(ts -> {
            Timesheets weeklyTimesheets1 = ts.getWeeklyTimesheets();
            if(weeklyTimesheets.getDocument().getUrl() != null)
                weeklyTimesheets1.setSubmissionStatus("complete");

            weeklyTimesheets1.setDailyTimesheets(weeklyTimesheets.getDailyTimesheets());

            ts.setWeeklyTimesheets(weeklyTimesheets1);
            timesheetRepository.save(ts);
        });
    }
    public void save(Timesheet timesheet){
        timesheetRepository.save(timesheet);
    }
}
