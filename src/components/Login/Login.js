import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const {user,googleSignIn} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="react_form">
            <form style={{width:'90%'}} onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{textAlign:'center'}}>Please Log in first</h1>
                <input className="inputGroup" defaultValue={user.displayName} placeholder="Your Name" {...register("name")} />
                <input className="inputGroup" defaultValue={user.email} placeholder="Your Email" {...register("email", { required: true })} />
                {errors.email && <span style={{color:'red',margin: '.7rem'}}>User email is required</span>}
                <input className="inputBtn" type="submit" />
                <small style={{margin: '.7rem'}}>First time in this site?</small>
                <Link to="/register">Register Now</Link><br />
                <button className="googleBtn" onClick={googleSignIn}>Google Sign in</button>
            </form>
        </div>
    );
};

export default Login;