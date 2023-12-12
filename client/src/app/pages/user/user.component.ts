import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { io } from 'socket.io-client';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: Array<any> = [];
  private socket: any;
  constructor(private _userService: UserService) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
    this.socket.on('userUpdated', (data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Se actualizo un usuario.',
        footer: '<p>CBM System</p>',
        timer: 1000, // Milisegundos, en este caso, 3000ms o 3 segundos
        showConfirmButton: false,
      });
      this._userService.getAllUsers().subscribe((data) => {
        this.users = data;
      });
    });
  }
}
