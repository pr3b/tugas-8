import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, incrementAge, decrementAge } from '../store/actions'

export default function Homeredux() {

    const name = useSelector((state) => state.name)
    const age = useSelector((state) => state.age)

    const dispatch = useDispatch()
    
    function handleOnChange(e){
        console.log(e.target.value);
        dispatch(changeName(e.target.value))
    }

    function handleOnSubmit(event){
        event.preventDefault()
        dispatch(changeName())
    }

    function handleClickIncrement(){
        dispatch(incrementAge())
    }

    function handleClickDecrement(){
        dispatch(decrementAge())
    }

    return (
        <div>
            <h1>homepage</h1>
            <h3>Welcome {name} my age is {age}</h3>
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={name} onChange={handleOnChange} />
                <button>namamu siapa</button>
            </form>
            <button onClick={handleClickIncrement}>tambah umur</button>
            <button onClick={handleClickDecrement}>kurangi umur</button>
        </div>
    )
}
