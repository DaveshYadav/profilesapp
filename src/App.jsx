import { useEffect, useState } from 'react'
import { getCurrentUser } from 'aws-amplify/auth'

function App() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUser() {
      try {
        const user = await getCurrentUser()
        const userEmail = user?.signInDetails?.loginId || 'Signed in user'
        setEmail(userEmail)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' }}>
      <h1>Build a Basic Web Application</h1>
      <h2>Created by Davesh Kumar Yadav</h2>
      {loading ? <p>Loading...</p> : <p>Your email: {email}</p>}
    </div>
  )
}

export default App