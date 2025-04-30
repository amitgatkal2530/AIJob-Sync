import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { singnupValidation } from "../Services/FormValidation";
import { registerUser } from "../Services/UserService";

const initialForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "APPLICANT"
};

const SignUp = () => {
    const [data, setData] = useState<{ [key: string]: string }>(initialForm);
    const [formError, setFormError] = useState<{ [key: string]: string }>(initialForm);
    const navigate = useNavigate();

    const handleChange = (event: any) => {
        let name = event.target.name;
        let value = event.target.value;

        setData({ ...data, [name]: value });
        setFormError({ ...formError, [name]: singnupValidation(name, value) });

        if (name === "password" && data.confirmPassword !== "") {
            let err = data.confirmPassword !== value ? "Passwords do not match." : "";
            setFormError({ ...formError, confirmPassword: err });
        }

        if (name === "confirmPassword") {
            setFormError({ ...formError, confirmPassword: data.password !== value ? "Passwords do not match." : "" });
        }
    };

    const handleSubmit = () => {
        let valid = true;
        let newFormError: { [key: string]: string } = {};

        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") {
                newFormError[key] = singnupValidation(key, data[key]);
            } else if (data[key] !== data["password"]) {
                newFormError[key] = "Passwords do not match.";
            }
            if (newFormError[key]) valid = false;
        }

        setFormError(newFormError);

        if (valid) {
            registerUser(data)
                .then((res) => {
                    console.log(res);
                    setData(initialForm);
                    notifications.show({
                        title: 'Registration Successful',
                        message: 'Redirecting to Login Page...',
                        withCloseButton: true,
                        icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
                        color: "teal",
                        withBorder: true,
                        className: "!border-green-500"
                    });
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                })
                .catch((err) => {
                    console.log(err);

                    notifications.show({
                        title: 'Registration Failed',
                        message: 'User already registered.',
                        withCloseButton: true,
                        icon: <IconX style={{ width: "90%", height: "90%" }} />,
                        color: "red",
                        withBorder: true,
                        className: "!border-red-500"
                    });
                });
        }
    };

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            
            <div className="text-2xl font-semibold">Create Account</div>
            
            <TextInput 
                value={data.name} 
                error={formError.name} 
                name="name" 
                onChange={handleChange} 
                withAsterisk 
                label="Full Name"  
                placeholder="Enter name" 
            />

            <TextInput 
                value={data.email} 
                error={formError.email}  
                name="email" 
                onChange={handleChange} 
                withAsterisk 
                leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} 
                label="Email" 
                placeholder="Enter email" 
            />

<PasswordInput 
    value={data.password}  
    error={formError.password} 
    name="password" 
    onChange={handleChange} 
    withAsterisk 
    leftSection={<IconLock size={18} stroke={1.5} />} 
    label="Password" 
    placeholder="Enter password" 
    autoComplete="new-password" // Prevent autofill background issue
/>

<PasswordInput 
    value={data.confirmPassword} 
    error={formError.confirmPassword} 
    name="confirmPassword" 
    onChange={handleChange} 
    withAsterisk 
    leftSection={<IconLock size={18} stroke={1.5} />} 
    label="Confirm Password" 
    placeholder="Confirm password" 
    autoComplete="new-password" // Prevent autofill background issue
/>


            <Radio.Group
                value={data.accountType}
                onChange={(value) => setData({ ...data, accountType: value })}
                label="You are ?"
                description="This is anonymous"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio 
                        className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-400  border-mine-shaft-800 rounded-lg " 
                        autoContrast 
                        value="APPLICANT" 
                        label="Applicant" 
                    />
                    <Radio 
                        className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-400  border-mine-shaft-800 rounded-lg " 
                        autoContrast 
                        value="EMPLOYER" 
                        label="Employer" 
                    />
                </Group>
            </Radio.Group>

            <Checkbox 
                autoContrast 
                label={<> I accept{' '}<Anchor>terms & conditions</Anchor></>}
            />

            <Button onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>
            
            <div className="mx-auto">
                Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link>
            </div>
        </div>
    );
};

export default SignUp;
