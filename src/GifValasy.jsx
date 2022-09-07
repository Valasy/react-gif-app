import {useState} from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifValasy = () => {

  const [categories, setCategories] = useState(['Kobayashi']);  

  const onAddCategory = (newCategory) => {
    //setCategories(['Mob Psyco',...categories])
    //console.log(newCategory);  
    if( categories.includes(newCategory)) return ; 
    setCategories([newCategory,...categories]);

  }

  return (
    <>
        <h1>Gif App Valasy!</h1>
        <AddCategory
          onNewCategory= { (value) => onAddCategory(value)} 
        //setCategories={ setCategories}
        />
     
        {
            categories.map( (categories) => (
            <GifGrid 
                key={ categories } 
                category= { categories }
            />
            ))
        }
      
    </>
  )
}
