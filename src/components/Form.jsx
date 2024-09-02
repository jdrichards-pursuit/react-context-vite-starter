import { useState } from 'react'
//This is how I import and consume the context if I want to use the custom hook from LanguageContext
import { useLanguage } from '../context/LanguageContext'

//the NavBar which is singly nested in the App.js can consume the context. Meanwhile so can this deeply next Form.js component
export default function Form() {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  // destructure and consume only the data, state or functions that I need from the component
  const { language, setLanguage, english, french } = useLanguage()

  const { greeting, instruction, select, firstName, lastName, button } =
    language === 'english' ? english : french

  const handleSubmit = (e) => {
    e.preventDefault()
    // no need to make this work. out of scope of project
  }

  return (
    <>
      <h1>{greeting} 😃!</h1>
      <h2>
        {select} <span onClick={() => setLanguage('french')}>FR</span> |
        <span onClick={() => setLanguage('english')}>EN</span>
      </h2>
      <p>{instruction}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            type="text"
            placeholder={firstName}
            value={name.firstName}
            id="firstName"
            onChange={(e) =>
              setName({ ...name, [e.target.id]: e.target.value })
            }
          />
        </label>
        <label htmlFor="lastName">
          <input
            type="text"
            placeholder={lastName}
            value={name.lastName}
            id="lastName"
            onChange={(e) =>
              setName({ ...name, [e.target.id]: e.target.value })
            }
          />
        </label>
        <button type="submit">{button}</button>
      </form>
    </>
  )
}
