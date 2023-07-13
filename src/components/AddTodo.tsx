import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store'

export function AddTodo() {
    const [newTodo, SetNewTodo] = useState('')
    const dispatch = useDispatch()

    function handleNewTodo(e: FormEvent) {
        e.preventDefault()

        dispatch(add({
            newTodo,
        }))

        SetNewTodo('')
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