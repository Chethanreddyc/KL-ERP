import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import {ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";
 
export default function Login() {

  const [ loginInfo, setLoginInfo] = useState({
    email:'',
    password: '',
  })

  const navigate = useNavigate();
  const handleChange = (e)=>{
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = {...loginInfo };
    copyLoginInfo[name]=value;
    setLoginInfo(copyLoginInfo);
  }
  console.log('loginInfo -> ', loginInfo)
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
  
    if ( !email || !password) {
      handleError('enter all details');
      return; 
    }
  
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo)
      });
  
      const result = await response.json();
      console.log(result);
      const { success, message, jwtToken, name, error} = result;
      if(success){
        handleSuccess(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('LoggedinUser', name);
        setTimeout(()=>{
          navigate('/home')
        },1000)
      }
      else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }
    } catch (err) {
      handleError(err);
    }
  }
    return (
      <div className="flex justify-center items-center h-screen bg-blue-gray-100"> 
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              LOGIN
            </Typography>
          </CardHeader>
          <form onSubmit={handleLogin}> 
            <CardBody className="flex flex-col gap-4">
              <Input
                onChange={handleChange}
                label="Email"
                name='email'
                size="lg"
                value={loginInfo.email}
              />
              <Input 
                onChange={handleChange}
                label="Password" 
                name='password'
                value={loginInfo.password}
                size="lg" 
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type='submit' variant="gradient" fullWidth>
                Login
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Typography
                  as="a"
                  href='/signup'
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
        <ToastContainer/>
      </div>
    );
}