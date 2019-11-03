import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FilterService } from '../../services/filter.service';
import { MainInfo } from '../../entities/userInterface';
import { User } from '../../entities/userInterface';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
  providers: [FilterService]
})

export class FilterFormComponent implements OnInit {
  findedUsers: User[];
  @Output() onFilter = new EventEmitter<any>();
  filterForm: FormGroup;
  mainInfo: MainInfo;


  constructor(private filterService: FilterService) {}
  ngOnInit() {
    this.filterForm = new FormGroup({
      firstName: new FormControl('', [
          Validators.pattern('[a-zA-Z ]*'),
          Validators.minLength(2),
          Validators.maxLength(20)
      ]),
      lastName: new FormControl('', [
          Validators.pattern('[a-zA-Z ]*'),
          Validators.minLength(2),
          Validators.maxLength(20)
      ]),
      userName: new FormControl('', [
          Validators.minLength(2),
          Validators.maxLength(15)
      ]),
      phone: new FormControl('', [
          Validators.pattern('[0-9]{12}')
      ]),
      email: new FormControl('', [
          Validators.email,
          Validators.minLength(8),
          Validators.maxLength(25)
      ]),
   });
  }
  filter() {
    this.findedUsers = this.filterService.filter(this.filterForm.value);
    this.onFilter.emit(this.findedUsers);
  }
  clearForm() {
    this.filterForm.reset();
  }

}
