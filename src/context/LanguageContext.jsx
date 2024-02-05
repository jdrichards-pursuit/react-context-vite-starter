import { useState, createContext, useContext } from 'react'
import { french, english } from '../data/languages'

//instead of lifting state to App.js and threading so deeply into the components, I can create a context. That way. Any component I choose can simply grab the information from context and consume it without prop threading.

//creates an object called the context object. I can import this object along with the 'useContext hook' and use them to consume my data. See Navbar.js
export const LanguageContext = createContext()

//if I don't want to import useContext and Language context everytime I can create a custom hook
// saves a few lines of code but not required. See Form.js
export const useLanguage = () => {
  return useContext(LanguageContext)
}

// This is a wrapper component It's customary to set up this wrapper component where all of the information we want to make available to the components lives.
// state, functions, fetches can all go inside your wrapper Component. But if a piece of state is only going to be used in that component or in a singly nested component, it isn't necessary to put it in here.

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('french')

  // the value prop below must be called 'value' and is the one attribute/prop of the Provider. It always takes an object. This is how you pass the data, functions etc to the the context object.
  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, french, english }}
    >
      {/* render whatever I put inside the opening and closing of this Provider */}
      {props.children}
    </LanguageContext.Provider>
  )
}
