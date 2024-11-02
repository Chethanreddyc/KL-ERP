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
   
  export default function Signup() {

    const [ signupInfo, setSignupInfo] = useState({
      name: '',
      email:'',
      password: '',
    })

    const navigate = useNavigate();
    const handleChange = (e)=>{
      const { name, value } = e.target;
      console.log(name, value);
      const copySignupInfo = {...signupInfo };
      copySignupInfo[name]=value;
      setSignupInfo(copySignupInfo);
    }
    console.log('signupInfo -> ', signupInfo)
    const handleSignup = async (e) => {
      e.preventDefault();
      const { name, email, password } = signupInfo;
    
      if (!name || !email || !password) {
        handleError('enter all details');
        return; 
      }
    
      try {
        const url = "http://localhost:8080/auth/signup";
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupInfo)
        });
    
        const result = await response.json();
        console.log(result);
        const { success, message, error} = result;
        if(success){
          handleSuccess(message);
          setTimeout(()=>{
            navigate('/login')
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
                Sign In
              </Typography>
            </CardHeader>
            <form onSubmit={handleSignup}> {/* Move onSubmit here */}
              <CardBody className="flex flex-col gap-4">
                <Input
                  onChange={handleChange}
                  label="Name"
                  name='name'
                  size="lg"
                  value={signupInfo.name}
                />
                <Input
                  onChange={handleChange}
                  label="Email"
                  name='email'
                  size="lg"
                  value={signupInfo.email}
                />
                <Input 
                  onChange={handleChange}
                  label="Password" 
                  name='password'
                  value={signupInfo.password}
                  size="lg" 
                />
                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button type='submit' variant="gradient" fullWidth>
                  Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                  Already have an account?
                  <Typography
                    as="a"
                    href='/login'
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                    login
                  </Typography>
                </Typography>
              </CardFooter>
            </form>
          </Card>
          <ToastContainer/>
        </div>
      );
  }