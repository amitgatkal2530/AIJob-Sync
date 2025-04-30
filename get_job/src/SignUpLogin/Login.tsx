import { Button, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import { loginUser } from "../Services/UserService";
import { loginValidation } from "../Services/FormValidation";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";

const initialForm = {
  email: "",
  password: ""
};

const Login = () => {
  const[loading,setLoading]=useState(false);
  const dispatch=useDispatch();
  const [data, setData] = useState<{ [key: string]: string }>(initialForm);
  const [formError, setFormError] = useState<{ [key: string]: string | undefined }>(initialForm);
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    let valid = true;
    let newFormError: { [key: string]: string | undefined } = {};

    // Validate form fields
    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);
      if (newFormError[key]) valid = false;
    }

    setFormError(newFormError);

    // If form is valid, proceed with login attempt
    if (valid) {
      loginUser(data)
        .then((res) => {
          console.log(res);
          showNotification({
            title: "Login Successfully Redirecting to home page",
            message: "",
            color: "green",
            icon: <IconCheck size={18} />
          });
          setTimeout(()=>{
            setLoading(false);
            dispatch(setUser(res))
            navigate("/");

          },3000)

          
        })
        .catch((err) => {
          const errorMessage = err.response?.data?.message || "Invalid email or password!";
          setLoading(false);
          // Show notification when login fails
          showNotification({
            title: "Login Failed",
            message: errorMessage,
            color: "red",
            icon: <IconX size={18} />
          });
        });
    }
  };

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        
      <div className="text-2xl font-semibold">Sign In</div>

      {/* Email Input */}
      <TextInput
        value={data.email}
        name="email"
        autoComplete="off"
        onChange={handleChange}
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Enter email"
        error={formError.email}
      />

      {/* Password Input */}
      <PasswordInput
        value={data.password}
        name="password"
        autoComplete="new-password"
        onChange={handleChange}
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Enter password"
        error={formError.password}
      />

      {/* Submit Button */}
      <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">
        Login
      </Button>

      {/* SignUp Link */}
      <div className="mx-auto">
        Don't have an account?{" "}
        <Link to="/signup" className="text-bright-sun-400 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
function successNotification(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}

