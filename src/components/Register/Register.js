import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const {user,googleSignIn} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="react_form">
            <form style={{width:'90%'}} onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{textAlign:'center',color:'rgba(247, 63, 30, 0.945)'}}>Please Register first</h1>
                <input className="inputGroup" defaultValue={user.displayName} placeholder="Your Name" {...register("name")} />
                <input className="inputGroup" defaultValue={user.email} placeholder="Your Email" {...register("email", { required: true })} />
                {errors.email && <span style={{color:'red',margin: '.7rem'}}>User email is required</span>}
                <input className="inputGroup" defaultValue="" placeholder="Your Phone" {...register("phone", { required: true })} />
                <input className="inputBtn" type="submit" />
                <small style={{margin: '.7rem'}}>Already registered</small>
                <Link to="/login">Log in here</Link><br />
                <button className="googleBtn" onClick={googleSignIn}>Google Sign in</button>
            </form>
            <div className="car">
                <img style={{width:'100%',height:'100%'}} src="https://img.pikbest.com/58pic/35/39/54/94458PIC0S8xS5458PICXWVzc_PIC2018.gif!bw700" alt="" />
            </div>
        </div>
    );
};

export default Register;