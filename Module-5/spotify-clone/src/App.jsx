import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'
import HomePage from './pages/HomePage';

function App() {
  const auth_endpoint = import.meta.env.VITE_AUTH_ENDPOINT;
  const response_type = import.meta.env.VITE_RESPONSE_TYPE;
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const redirect_URI = import.meta.env.VITE_REDIRECT_URI;
  const scope = import.meta.env.VITE_SCOPE;
  const [token, setToken] = useState("")

  const Auth = `${auth_endpoint}response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_URI}&scope=${scope}`

  useEffect(() => {
    const hash = window.location.hash;
    let accessToken = window.localStorage.getItem('token');

    if (hash && !accessToken) {
      const accessToken = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', accessToken);
    }
    setToken(accessToken);
  }, [])

  return (
    <>
      {token ?
        (
          <HomePage token={token} />
        )
        :
        (
          <div className='login'>
            <h1>Spotify Clone - GIGIH 3.0</h1>
            <a href={Auth}>
              <Button text={'Login to Spotify'} />
            </a>
          </div>
        )}
    </>
  )
}


export default App
