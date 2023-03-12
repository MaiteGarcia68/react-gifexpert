import { useState } from "react"


export const AddCategory = ( { onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( event ) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        //console.log(event)
        event.preventDefault();
        //console.log(inputValue)

        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim())
        // setCategories( categories => [ inputValue,...categories])
        setInputValue('');
    }

    return (
        <form onSubmit = { onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"       
                value={ inputValue }  
                /*onChange= { (event) => onInputChange( event) }*/ // es igual a 
                onChange= { onInputChange }
                />


        </form>
    )

    
}
