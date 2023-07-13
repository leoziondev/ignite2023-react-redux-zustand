import { FormEvent, useState } from 'react'

export function AddTodo() {
    const [newTodo, SetNewTodo] = useState('')

    function handleNewTodo(e: FormEvent) {
        e.preventDefault()

        console.log(newTodo)
    }
    return (
        <form onSubmit={handleNewTodo}>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => SetNewTodo(e.target.value)}
                placeholder="Novo todo"
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}