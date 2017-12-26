import { Component, OnInit } from '@angular/core';
import { TeacherListDataService } from '../../services/teacher-list-data.service';
import {Teacher } from '../../services/teacher-list-data.service'



@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[];
  isToDisplayTeachers: boolean = false;
  constructor(private teacherListDataService:TeacherListDataService) { }

  ngOnInit() {
    this.teacherListDataService.getTeachers().subscribe( (teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });

    /*if (!(this.teachers && this.teachers.length > 0)) {
      this.teachers = [
        {teacherId: '0', name:'ilker', lastname:'kiris', title: 'adjunct', age: 50, isFullTime: false, updatedOn: new Date()},
        {teacherId: '1', name:'brian', lastname:'knorr', title: 'professor', age: 31, isFullTime: true, updatedOn: new Date()},
      ];
    }*/
}


  toggleToDisplayTeachers () {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }

  onClick () {
    this.toggleToDisplayTeachers();
  }
}


