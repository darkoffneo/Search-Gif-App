
import { useState } from "react";
export const useAddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if (inputValue <=1)return;
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return {
        inputValue,
        onInputChange,
        onSubmit
    }


}
