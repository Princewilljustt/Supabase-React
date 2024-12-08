import { useState,useEffect } from 'react'
import { supabase } from "./config/supabaseClient"


const App = () => {

  const [users, setUsers] = useState([])
  // console.log(users)

  useEffect(() => {
   fetchUsers()
    }, [])
  

  async function fetchUsers() {
    const {data} = await supabase
    .from('users')
    .select('*')
    setUsers(data)
    console.log(users)

  }
  return (
    <div>
      
      
      App
      </div>
  )
}

export default App