import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // no need to make this work. out of scope of project
  }

  return (
    <>
      <h1>Hello 😃!</h1>
      <h2>
        Choose Your Language <span>FR</span> |<span>EN</span>
      </h2>
      <p>Please Fill Out This Form</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            type="text"
            placeholder="First Name"
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
            placeholder="Last Name"
            value={name.lastName}
            id="lastName"
            onChange={(e) =>
              setName({ ...name, [e.target.id]: e.target.value })
            }
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
