import React, { useEffect, useState, createContext } from 'react';
import styles from './app.module.css';
import { BrowserRouter } from "react-router-dom"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { ingredientType } from '../../utils/types'


function App() {

  const [ingredients, setIngredients] = useState<ingredientType[]>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const [changeRoll, setChangeRoll] = useState<ingredientType>();
  const [burgerIngredient, setBurgerIngredient] = useState<ingredientType[]>([]);


  function addIngredient(ingredient: ingredientType) {
    setBurgerIngredient([...burgerIngredient, ingredient]);
  }

  function removeIngredient(indexIngredient: number) {
    burgerIngredient.splice(indexIngredient, 1);
    setBurgerIngredient([...burgerIngredient]);
  }

  function changingRoll(roll: ingredientType) {
    setChangeRoll(roll);
  }
  function checkCount(ingredient: ingredientType) {
    return burgerIngredient.filter(ingredientInBurger => ingredientInBurger === ingredient).length;
  }

  useEffect(() => {
    if (!isLoad) {
      fetch('https://norma.nomoreparties.space/api/ingredients').then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
      }).then(data => {
        setIngredients(data.data);
        setChangeRoll(data.data.find((roll: ingredientType) => roll._id === "643d69a5c3f7b9001cfa093c"))
        setIsLoad(true);
      }).catch(console.error);
    }

  }, [])


  if (isLoad) {
    return (
      <BrowserRouter>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <main className={styles.container}>
            <BurgerIngredients checkCount={checkCount} ingredients={ingredients} isSelectedRoll={changeRoll} />
            <BurgerConstructor addIngredient={addIngredient} removeIngredient={removeIngredient} changeRoll={changeRoll} burgerIngredients={burgerIngredient} />
          </main>
        </DndProvider>
      </BrowserRouter>
    )
  } else {
    return null;

  }

}

export default App;