package com.example.timesheetserver.DAO;

import com.example.timesheetserver.Domain.Timesheet;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TimesheetRepository extends MongoRepository<Timesheet, String> {

    List<Timesheet> findByProfile_Id(String id);
    List<Timesheet> findAll();


}
