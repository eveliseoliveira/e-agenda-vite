import { IPaginaHTML } from "./shared/pagina.interface.js";

class index implements IPaginaHTML{
 btnCadastar: HTMLButtonElement;
    
  constructor() {
    this.configurarElemento();
  }

  public configurarElemento(): void { }
}

new index();