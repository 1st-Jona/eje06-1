import { Injectable } from '@angular/core';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Jonathan López Sánchez',
      controlNumber: '16400948',
      active: true
    });
    this.students.push({
      name: 'Martin López Báez',
      controlNumber: '16400946',
      active: true
    });
    this.students.push({
      name: 'Ariel Gómez Perez',
      controlNumber: '16400947',
      active: false
    });
  }
  getStudents(): Student[] {
    return this.students;
  }
  changeStatus(position: number): void{
    this.students[position].active = !this.students[position].active;
  }

  deleteStudent(position: number): void{
    this.students.splice(position, 1);
  }
  newStudent(student:Student): void{
    this.students.push(student);
  }
}
