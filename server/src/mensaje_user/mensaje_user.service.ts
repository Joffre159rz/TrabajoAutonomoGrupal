import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io'
import { User } from '../user/entities/user.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';

interface ConnectedClients {
  [id: string]: {
    socket: Socket,
    user: any
  }
}

@Injectable()
export class MensajesWsService {
  private connectedClients: ConnectedClients = {}

  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>,
    private readonly userService: UserService
  ) { }

  async registerClient(client: Socket, name: string) {
    for (const key in this.connectedClients) {
      const client = this.connectedClients[key];
      console.log('Valor:', client.user[0].name);
      if (client.user[0].name===name) {
        console.log("Usuario ya conectado");
        throw new Error("Usuario ya conectado");
      }
    }   
    const user = await this.userService.findbyOne(name);
    if (!user) throw new Error('user no encontrado');
    this.connectedClients[client.id] = { socket: client, user: user };
    console.log(this.connectedClients);
    
  }
  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }
  getConnectedClients(): string[] {
    // return Object.keys(this.connectedClients).length;
    // console.log(this.connectedClients)
    return Object.keys(this.connectedClients);
  }
  getStudentFullName(id: string) {
    console.log(this.connectedClients[id]);
    
    return this.connectedClients[id].user[0].name;
  }
}
