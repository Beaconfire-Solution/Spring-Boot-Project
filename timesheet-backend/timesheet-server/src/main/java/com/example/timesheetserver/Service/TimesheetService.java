package com.example.timesheetserver.Service;

import com.example.timesheetserver.DAO.TimesheetRepository;
import com.example.timesheetserver.Domain.Timesheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

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

    public void save(Timesheet timesheet){
        timesheetRepository.save(timesheet);
    }
}
