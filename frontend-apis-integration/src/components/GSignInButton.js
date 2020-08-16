import React from 'react'
import GoogleLogin from 'react-google-login';

import {api} from '../services/api'



export default function GSignInButton(){

  async function responseGoogle(googleRes){
    // const user = {

    //   googleId	  : googleRes.profileObj.googleId,
    //   imageUrl	  : googleRes.profileObj.imageUrl,
    //   email	      : googleRes.profileObj.email,
    //   name	      : googleRes.profileObj.givenName + " " + googleRes.profileObj.familyName,
    //   screenName  : googleRes.profileObj.givenName,
    // }

    const { googleId, imageUrl, email } =  googleRes.profileObj

    const name	      = googleRes.profileObj.givenName + " " + googleRes.profileObj.familyName
    const screenName  = googleRes.profileObj.givenName

    if(googleId !== ''){
      const response = await api.post('/users', {googleId, imageUrl, email, name, screenName })

      console.log(response)

      const { _id } = response.data

      localStorage.setItem('user', _id)

    }
  }

  if(localStorage.getItem('user')){
    return(
      <p>{localStorage.getItem('user')}</p>
    )
    
  }else{
    
    return (
      <GoogleLogin
      clientId="9706550721-763us74m0j4i4akm3l27mdlheqmifu9u.apps.googleusercontent.com"
      buttonText="Sign In"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    )

  }

}