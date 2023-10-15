import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [psw, setPsw] = useState('')

    const handleLogin = async() => {

    try {
        const url = "http://localhost:5000/hbca/login";
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            psw: psw,
          }),
          mode: "cors",
        });
  
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.error("error: ", e);
      }
    }
  return (
    <div className='container'>
        <section className="vh-100" >
            <div className="mask d-flex align-items-center h-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 cl-md-9 col-lg-7 col-xl-6">
                    <div className="card" >
                        <div className="card-body p-4">
                            <h2 className="text-uppercase text-center mb-5">Welcome Back</h2>
                            <form action="#">
                            <div className="form-outline mb-4">
                                <label htmlFor="email" className="form-label d-flex align-items-left">Email</label>
                                <input type="email" className="form-control form-control-lg" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            </div>                           
                            <div className="form-outline mb-4">
                                <label htmlFor="fname" className="form-label d-flex align-items-left">Password</label>
                                <input type="password" className="form-control form-control-lg" id="psw" value={psw} onChange={(e) => setPsw(e.target.value)}/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body w-100" value="Login" onClick={handleLogin}/>
                            </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Login