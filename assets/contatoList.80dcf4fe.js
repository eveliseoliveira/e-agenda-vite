var m=Object.defineProperty;var b=(o,t,e)=>t in o?m(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(b(o,typeof t!="symbol"?t+"":t,e),e);import"./style.c0ed6924.js";import{C as u}from"./contato.repository.local-storage.c6452071.js";import"./guid.model.16afb711.js";class C{constructor(t){c(this,"tabelaContato");this.repositorioContatos=t,this.configurarElemento(),this.atualizarTabela()}configurarElemento(){this.tabelaContato=document.getElementById("tabelaContato")}atualizarTabela(){const t=this.repositorioContatos.selecionarTodos();let e=this.tabelaContato.getElementsByTagName("tbody")[0];t.forEach(r=>{const l=e.insertRow();Object.values(r).forEach(a=>{const d=l.insertCell();d.innerText=a});const s=l.insertCell(),n=document.createElement("a");n.innerText="Editar",n.className="btn btn-primary me-1",n.addEventListener("click",()=>{const a=r.id;window.location.href=`contato.create.html?id=${a}`});const i=document.createElement("a");i.innerText="Excluir",i.className="btn btn-outline-warning",i.addEventListener("click",()=>{const a=r.id;this.repositorioContatos.excluir(a),window.location.reload()}),s.appendChild(n),s.appendChild(i)})}}new C(new u);