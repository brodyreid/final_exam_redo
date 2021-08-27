import React from 'react';

function SignInPage(props) {
    function handleSubmit() {

    }
    return(
        <main>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}></form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <input type="submit" value="Sign In" />
        </main>
    )
}


export default SignInPage;