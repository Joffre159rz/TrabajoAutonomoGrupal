export class Documento{

  constructor(

    public _id: string,
    public principal: string,
    public recibido: boolean,
    public persona_id: string,
    public proceso_determinado_id: string,

  ){}

}
