import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=['all',...new Set(items.map((item)=>item.category))]
console.log(allCategories)
function App() {
  const [menuItems,setMenuItems]=useState(items);
  const[categories,setCategories]=useState([]);

  const filterItems=(type)=>
  {
    if(type==="all")
    {
      setMenuItems(items);
      return;
    }
    let newMenuItems=items.filter((item)=>item.category===type)
    setMenuItems(newMenuItems)
  }

  return(

    <section className='menu section'>
      
      <div className='title'>
        <h2>Welcome To Tai <b>THE WORLD OF DIFFERENT TASTES</b>
         
         
        </h2>
        <div className='underline'></div>
      </div>
    <Categories filterItems={filterItems} categories={allCategories}/>
    <Menu items={menuItems}/>
    </section>
  );
}

export default App;
