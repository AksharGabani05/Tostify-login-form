import  React,{ useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'

const Form=()=>{

    let [Username,setUsername]=useState("")
    let [email,setemail]= useState("")
    let [password,setpassword]=useState("")
    let [signupemail,setsignuppemail]=useState("")
    let [signuppassword,setsignuppassword]=useState("")
    let [Signup,setSignup]=useState(false)
    let [check,setcheck]=useState(false)


    const nameregex = /^([a-zA-Z]{2,40})+$/
    const emailregex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    const passwordregex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    
    const SignupSubmit =(e)=>{
        e.preventDefault()
        if(Username.length==0&&signupemail.length==0&&signupemail.length==0){
            setcheck(true)
            toast.error('Plz Enter The Data!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                });
        }else if(!nameregex.test(Username)){
            setcheck(true)
            toast.error(' Pelase User Name Valide !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else if (!emailregex.test(signupemail)) {
            setcheck(true)
            toast.error('__@gamil.com', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else if(!passwordregex.test(signuppassword)){
            setcheck(true)
            toast.error('strong password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else if(Username.length>0&&signupemail.length>0&&signupemail.length>0){
            toast.success('success', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                setSignup(true)
        }
    }
    
    const Login=(e)=>{
        e.preventDefault()
        if(email.length==0&&password.length==0){
            setcheck(true)
            toast.error('pelase Input data', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else if(email!=signupemail){
            setcheck(true)
            toast.error('Email is not valid', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else if (password!=signuppassword) {
            setcheck(true)
            toast.error('Password is not valid !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }else if(email==signupemail && password==signuppassword){
            toast.success(' Login success', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
    
    return(
        <>
        {
            Signup ?
                    <form onSubmit={Login}>
                        <h1>Login Form</h1>
                        <input type="text" placeholder="email" onChange={(e)=>setemail(e.target.value)} />
                        <br/>
                        {check||email.length<0?<p >Not valide Email</p>:""}
                        <input type="text " placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
                        <br/>
                        {check&&password.length<=0?<p>Not valide Password</p>:""}
                        <input type="submit" value="Login" />
                    </form>
                   :
                   <form onSubmit={SignupSubmit}>
                    <h1>Signup Form</h1>
                        <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                        <br/>
                        {check&&Username.length<=0?<p>Not valide username</p>:""}
                        <input type="text" placeholder="email" onChange={(e)=>setsignuppemail(e.target.value)} />
                        <br/>
                        {check&&signupemail.length<=0?<p>Not valide email</p>:""}
                        <input type="password" placeholder="password" onChange={(e)=>setsignuppassword(e.target.value)}/>
                        <br/>
                        {check&&signuppassword.length<=0?<p>Not valide password</p>:""}
                        <input type="submit" value="signup" />
                    </form>
        }
        <ToastContainer />
        </>
    )
}

export default Form
