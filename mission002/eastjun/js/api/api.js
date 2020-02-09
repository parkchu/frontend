const DOMAIN = 'http://todo-api.roto.codes/'

const USERNAME = 'eastjun'

const METHOD = {
  PUT() {
    return {
      method: 'PUT',
    }
  },
  DELETE() {
    return {
      method: 'DELETE',
    }
  },
  POST(data) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: data,
      }),
    }
  },
}

const api = (() => {
  const request = (uri, config) => fetch(uri, config).then((response) => response.json())

  const todoItem = {
    get: () => request(`${DOMAIN}${USERNAME}`),
    add: (todoItem) => request(`${DOMAIN}${USERNAME}`, METHOD.POST(todoItem.content)),
    complete: (id) => request(`${DOMAIN}${USERNAME}/${id}/toggle`, METHOD.PUT()),
    remove: (id) => request(`${DOMAIN}${USERNAME}/${id}`, METHOD.DELETE()),
  }

  return {
    todoItem
  }
})()

export default api