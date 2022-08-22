import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IPaginaListagem } from "../shared/pagina.list.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Contato } from "./models/contato.model.js";
import { ContatoRepositoryLocalStorage } from "./repositories/contato.repository.local-storage.js";

class ContatoPaginaListagem implements IPaginaHTML, IPaginaListagem{

  tabelaContato: HTMLTableElement;

  constructor(private repositorioContatos: IRepositorio<Contato>){
    this.configurarElemento();
    this.atualizarTabela();
  }

  configurarElemento(): void {
    this.tabelaContato = document.getElementById("tabelaContato") as HTMLTableElement;
  }

  atualizarTabela(): void {
    const contatos = this.repositorioContatos.selecionarTodos();
  
    let corpoTabela = this.tabelaContato.getElementsByTagName("tbody")[0];
  
    contatos.forEach(contato => {
      const novaLinha = corpoTabela.insertRow();
  
      Object.values(contato).forEach((valor: any) => {
        const novaCelula = novaLinha.insertCell();
  
        novaCelula.innerText = valor;
      });
  
      const celulasBotoes = novaLinha.insertCell();
  
      const btnEditar = document.createElement("a");
      btnEditar.innerText = "Editar";
      btnEditar.className = "btn btn-primary me-1";
  
      btnEditar.addEventListener("click", () => {
        const idSelecionado = contato.id;
  
        window.location.href = `contato.create.html?id=${idSelecionado}`;
      }) 
  
      const btnExcluir = document.createElement("a");
      btnExcluir.innerText = "Excluir";
      btnExcluir.className = "btn btn-outline-warning";
  
      btnExcluir.addEventListener("click", () => {
        const idSelecionado = contato.id;
  
        this.repositorioContatos.excluir(idSelecionado);
  
        window.location.reload();
      })
  
      celulasBotoes.appendChild(btnEditar);
  
      celulasBotoes.appendChild(btnExcluir);
  
    })
  }
}

new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());