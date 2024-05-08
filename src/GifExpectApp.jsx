import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = ()=>{

    const [categories, setCategory] = useState([])
    
    const onAddCategory = (newCategory)=>{
        const catValidate = newCategory.toLowerCase()
        if (categories.includes(catValidate)) return;
        setCategory([catValidate, ...categories]);
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid 
                        key={category}
                        category={category}    
                    />
                ))
            } 
        </>
    )
}