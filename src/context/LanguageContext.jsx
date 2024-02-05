import { useState, createContext, useContext } from 'react'
import { french, english } from '../data/languages'

//I can create a context instead of lifting state to App.jsx and drilling so deeply from App.jsx to the desired component. As a result, any component I choose can simply consume the information from context directly. No prop drilling.

//the variable below creates an object called the context object. I can import this object along with the 'useContext hook' and use them to consume my data. However, I will create a useLanguage hook that saves me the extra steps
export const LanguageContext = createContext()

//if I don't want to import useContext and Language context everytime I  create a custom hook
export const useLanguage = () => {
  return useContext(LanguageContext)
}

// LanguageProvider is a wrapper component. It's customary to set up this wrapper component where all of the information we want to make available to the components will live.
// state, functions, fetches, useEffect can all go inside your wrapper Component.
//BUT if a piece of state is only going to be used in a single component or in a singly nested component, it isn't necessary to put it in context.

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('french')

  // the value prop below must be called 'value' and is the one attribute/prop of the Provider method. value is always assigned an object. This is how you pass the data, functions etc to the the context object.
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, french, english }}
    >
      {/* props.children means....when I use the LanguageProvider component ( in main.js for this app )...render whatever component I nest inside the opening and closing of the LanguageProvider component.*/}

      {props.children}
    </LanguageContext.Provider>
  )
}
