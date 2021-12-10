import React, { useState } from 'react';
import router, { useRouter } from 'next/router'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '876200838446-u8p072ksm8l3u5sb1ntv5cucdie3ig91.apps.googleusercontent.com';

function SocialLogin() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        // router.push('/admin/profile2')
        // href="/admin/dashboard";
        setShowloginButton(false);
        setShowlogoutButton(true);
      
        
    };
  
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");

        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    

    

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    
                    
                    
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default SocialLogin;