var h=Object.defineProperty;var c=(i,t,e)=>t in i?h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>(c(i,typeof t!="symbol"?t+"":t,e),e);import"./style.c0ed6924.js";import{E as d}from"./entidade.model.7c8b214e.js";import{C as u}from"./contato.repository.local-storage.c6452071.js";import"./guid.model.16afb711.js";class m extends d{constructor(e,a,r,n,s,l){super();o(this,"nome");o(this,"email");o(this,"telefone");o(this,"empresa");o(this,"cargo");l&&(this.id=l),this.nome=e,this.email=a,this.telefone=r,this.empresa=n,this.cargo=s}}class x{constructor(t,e){o(this,"txtNome");o(this,"txtEmail");o(this,"txtTelefone");o(this,"txtEmpresa");o(this,"txtCargo");o(this,"btnSalvar");o(this,"idSelecionado");if(this.repositorioContatos=t,this.configurarElemento(),e){this.idSelecionado=e;const a=this.repositorioContatos.selecionarPorId(e);a&&this.preencherFormulario(a)}}preencherFormulario(t){this.txtNome.value=t.nome,this.txtEmail.value=t.email,this.txtTelefone.value=t.telefone,this.txtEmpresa.value=t.empresa,this.txtCargo.value=t.cargo}configurarElemento(){this.txtNome=document.getElementById("txtNome"),this.txtEmail=document.getElementById("txtEmail"),this.txtTelefone=document.getElementById("txtTelefone"),this.txtEmpresa=document.getElementById("txtEmpresa"),this.txtCargo=document.getElementById("txtCargo"),this.btnSalvar=document.getElementById("btnSalvar"),this.btnSalvar.addEventListener("click",t=>this.gravarRegistros())}gravarRegistros(){const t=this.obterDadosFormulario();this.idSelecionado?this.repositorioContatos.editar(t.id,t):this.repositorioContatos.inserir(t),window.location.href="contato.list.html"}obterDadosFormulario(){const t=this.txtNome.value,e=this.txtEmail.value,a=this.txtTelefone.value,r=this.txtEmpresa.value,n=this.txtCargo.value;let s=null;return this.idSelecionado?s=new m(t,e,a,r,n,this.idSelecionado):s=new m(t,e,a,r,n),s}}const g=new URLSearchParams(window.location.search),p=g.get("id");new x(new u,p);