import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DeleteService } from '../../services/delete.service';
import { User } from '../../entities/userInterface';

@Component({
  selector: 'app-table-main-ifo',
  templateUrl: './table-main-ifo.component.html',
  styleUrls: ['./table-main-ifo.component.css'],
  providers: [DeleteService]
})
export class TableMainIfoComponent {
 @Input() findedUsers: User[];
 @Output() chooseUser = new EventEmitter<User>();

  constructor(private deleteService: DeleteService) {}
  onChooseUser(id: number) {
    const users = JSON.parse(localStorage.getItem('fullInfoUsers')) as User[];
    const user = users.find((el: User) => el.id === id);
    this.chooseUser.emit(user);
  }
  deleteUser(idUser: number) {
    this.findedUsers = this.deleteService.deleteUser(idUser);
  }
}
