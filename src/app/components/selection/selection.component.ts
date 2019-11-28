import { Component, OnInit, ViewChild } from '@angular/core';


//import { Testv1 } from '../testv1';
import { TestService } from '../../test.service';
import { FormBuilder, FormGroup, FormArray , FormControl} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  apps  : string[];
  roles : string[];
  roles2: string[];
  error   = '';
  success = '';
  
  toppings = new FormControl();
  toppingList: string[] /* = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'] */;
  
  tableau : string[] = ['1','2','3','4','5','6'];

  constructor(private testService:TestService, private fb : FormBuilder){}
 

  ngOnInit(){
    this.getColumns();
    this.getColumnsRoles();
    this.getColumnsRoles2();
  }
 
  getColumns() : void{
    this.testService.getColumns().subscribe(
      (res: string[]) =>{
        this.apps = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }


  getColumnsRoles() : void{
    this.testService.getColumnsRoles().subscribe(
      (res: string[]) =>{
        this.roles = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  getColumnsRoles2() : void{
    this.testService.getColumnsRoles2().subscribe(
      (res: string[]) =>{
        this.roles2 = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  
  /* states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]; */

  

}

