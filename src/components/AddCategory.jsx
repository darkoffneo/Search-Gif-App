import { useAddCategory } from "../hooks"

export const AddCategory = ({onNewCategory}) => {
    
    const {inputValue, onSubmit, onInputChange } = useAddCategory({onNewCategory})
    
    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }  
                onChange={ onInputChange }  
            />
        </form>
    )
}
