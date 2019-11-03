import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DeleteService } from '../../services/delete.service';
import { FilterService } from '../../services/filter.service';
import { User } from '../../entities/userInterface';
import {Address} from '../../entities/addressInterface';

@Component({
  selector: 'app-table-main-ifo',
  templateUrl: './table-main-ifo.component.html',
  styleUrls: ['./table-main-ifo.component.css'],
  providers: [DeleteService]
})
export class TableMainIfoComponent implements OnInit {
 @Input() findedUsers: User[];
 @Output() onChooseUser = new EventEmitter<User>();

  constructor(private deleteService: DeleteService) {}

  ngOnInit() {}

  chooseUser(user: User) {
    this.onChooseUser.emit(user);
  }
  deleteUser(idUser: number) {
    this.findedUsers = this.deleteService.deleteUser(idUser);
  }
}
