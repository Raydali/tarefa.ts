cat > tarefa.ts <<'TS'
// ==============================
// Sistema de Gerenciamento de Usuários
// Arquivo único: tarefa.ts
// ==============================

// 1) Interface Usuario
interface Usuario {
  nome: string;
  email: string;
  idade: number;
  status: boolean; // true = ativo, false = inativo
}

// 2) Array de usuários (inicialmente vazio)
const listaDeUsuarios: Usuario[] = [];

// 3) Função de cadastro
function cadastrarUsuario(usuario: Usuario): void {
  listaDeUsuarios.push(usuario);
}

// 4) Função de exibição
function listarUsuarios(): void {
  if (listaDeUsuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
    return;
  }

  console.log("======= Lista de Usuários =======");
  listaDeUsuarios.forEach((u, i) => {
    console.log(`#${i + 1}`);
    console.log(`Nome  : ${u.nome}`);
    console.log(`Email : ${u.email}`);
    console.log(`Idade : ${u.idade}`);
    console.log(`Status: ${u.status ? "Ativo" : "Inativo"}`);
    console.log("---------------------------------");
  });
  console.log(`Total: ${listaDeUsuarios.length} usuário(s).`);
}

// ======= Exemplos de uso =======
cadastrarUsuario({
  nome: "Ana Souza",
  email: "ana.souza@example.com",
  idade: 28,
  status: true,
});

cadastrarUsuario({
  nome: "Bruno Lima",
  email: "bruno.lima@example.com",
  idade: 34,
  status: false,
});

cadastrarUsuario({
  nome: "Carla Menezes",
  email: "carla.menezes@example.com",
  idade: 22,
  status: true,
});

// Exibir no console
listarUsuarios();
TS
