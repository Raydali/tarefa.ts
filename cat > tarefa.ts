// tarefa.ts

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

// 4) Função de listagem
function listarUsuarios(): void {
  if (listaDeUsuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
    return;
  }

  console.log("=== Lista de Usuários ===");
  listaDeUsuarios.forEach((u, i) => {
    console.log(#${i + 1});
    console.log(`  Nome  : ${u.nome}`);
    console.log(`  Email : ${u.email}`);
    console.log(`  Idade : ${u.idade}`);
    console.log(`  Status: ${u.status ? "Ativo" : "Inativo"}`);
    console.log("-------------------------");
  });
}

// ======= Testes (cadastre alguns usuários de exemplo) =======
cadastrarUsuario({ nome: "Krina Freitas",   email: "karina@example.com",   idade: 22, status: true  });
cadastrarUsuario({ nome: "Bruno Oliveira", email: "bruno@example.com", idade: 30, status: false });
cadastrarUsuario({ nome: "Rayda Lima",   email: "rayda@example.com",   idade: 17, status: true  });

// Listar no console
listarUsuarios();
