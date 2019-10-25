import { Component, OnInit, Input, Output } from '@angular/core';
import { DeleteService } from './../../services/delete.service';
import { User } from './../../entities/userInterface';

@Component({
  selector: 'app-table-main-ifo',
  templateUrl: './table-main-ifo.component.html',
  styleUrls: ['./table-main-ifo.component.css'],
  providers: [DeleteService]
})
export class TableMainIfoComponent implements OnInit {
	@Input() findedUsers: User[];
	result: User[];

	constructor(private deleteService: DeleteService){} 
	ngOnInit() { }
  	deleteUser(user: User, idUser){
		this.result = this.deleteService.deleteUser(this.findedUsers, idUser);  
	}
}
