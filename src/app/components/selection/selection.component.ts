import { LigneSelectComponent } from './../ligne-select/ligne-select.component';
import { Component, OnInit, ViewChild } from '@angular/core';


// import { Testv1 } from '../testv1';
import { TestService } from '../../test.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { $ } from 'protractor';
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  data: string[];
  displayedColumns: string[];
  apps: string[];
  selectedApp = "";
  dataSource: MatTableDataSource<string>;
  isLoadingResults = true;
  tableau: string[] = ['1', '2', '3'];
  // getColumnsApps: any;
  error = '';
  success = '';
  // tabbb: LigneSelectComponent[];
  toppings = new FormControl();

  constructor(private testService: TestService, private fb: FormBuilder) { 

   /*  var selection =angular.module('selection', []);
    selection.controller('selectCtrl', function($scope){


      $scope.apps=[app_1, app_2, app_3];
      $scope.app_1=[orange, bleau, vert];
      $scope.app_2=[foot, basket, tenis];

    }); */
    }


 
  ngOnInit() {
    this.getColumns();



    (<HTMLInputElement>document.getElementById("selectApp")).addEventListener('change', function () {
    console.log(this.value);
  }); 
}

  getColumns(): void {
    this.testService.getColumns().subscribe(
      (res: string[]) => {
        this.apps = res;
      },
      err => {
        this.error = err;
      }
    );
  } 

  /* salut() {
    this.tabbb.push(new LigneSelectComponent());
  }*/
} 