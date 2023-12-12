import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class SocketGateway {
  @SubscribeMessage('updateUser')
  handleUpdateUser(@MessageBody() data: any): void {
    // Aquí puedes emitir el evento a todos los clientes conectados
    console.log('paso por aqui');
    this.server.emit('userUpdated', data);
  }
  private server: Server;
  afterInit(server: Server) {
    this.server = server;
  }
}
