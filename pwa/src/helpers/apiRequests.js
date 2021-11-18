const url = ' http://localhost:4000/todos';

export async function createTodo(data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function readTodos() {
  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
}

export async function readTodo(id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'GET',
  });
  return response.json();
}

export async function updateTodo(data = {}) {
  const response = await fetch(`${url}/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}
