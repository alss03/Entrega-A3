import { instanciaHttp } from "./axios";

export async function login(input) {
  const response = await instanciaHttp.post("/login", input);

  return response.data;
}

export async function registrar(input) {
  const response = await instanciaHttp.post("/registrar", input);

  return response.data;
}

export async function deletar(input) {
  const response = await instanciaHttp.delete(`/deletarUsuario/${input.id}`);

  return response.data;
}

export async function atualizar(input) {
  const response = await instanciaHttp.put(`/atualizar/${input.id}`, input);

  return response.data;
}
