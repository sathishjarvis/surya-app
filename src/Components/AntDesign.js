import React, { useState } from 'react';
import "../App.css";
import { Button, DatePicker, Form, Checkbox, Input, Select, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function Antdesign() {
    const navigate = useNavigate();
    const [showed, setshowed] = useState("true");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;


    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    // const Ages = () => {
    //     const dob = document.getElementById("age");
    //     const dateofBirth = new Date(dob);
    //     var current = new Date();
    //     var todays = new Date(current);
    //     var age = todays.getFullyear() - dateofBirth.getFullyear();
    //     console.log("age is " + age);
    // }
    const handleSignup = () => {
        setshowed(false)
    }
    const handleGoBack = () => {
        setshowed(true)
    }
    const handleLogin = () => {
        if (email === "" && password === "") {
            return Promise.reject('please enter required email and password');
        } else if (email === "sathishsurya462000@gmail.com" && password === "Surya@123") {
            navigate("/Landing");
            return Promise.resolve();
        }
    }
    const handleDirectLogin = () => {
        if (email === "" && password === "") {
            return Promise.reject('please enter required email and password');
        } else if (email === "sathishsurya462000@gmail.com" && password === "Surya@123") {
            navigate("/Landing");
            return Promise.resolve();
        }
    }
    const validateEmail = (_, value) => {
        if (value !== "sathishsurya462000@gmail.com") {
            return Promise.reject('please enter required email');
        } else {

            return Promise.resolve();
        }
    };
    const validatePassword = (_, value) => {
        if (value !== "Surya@123") {
            return Promise.reject('please enter require password');
        } else {
            return Promise.resolve();
        }
    }
    const validateLoginPassword = (_, value) => {
        // if (value === "") {
        //     return Promise.reject('please enter the password');
        // }
        if (value === "" || value.length < 6) {
            return Promise.reject('Password must be at least 6 characters long');
        }
        else if (!regex.test(value)) {
            return Promise.reject(
                'Password must contain at least one uppercase, one lowercase, one number, one symbol'
            );
        }
        else {

            return Promise.resolve();
        }
    }

    return (
        <>
            {
                showed ? (
                    <div className='signup-page'>
                        <div className='center'>
                            <Form autoComplete='on' className='first' layout='vertical' onFinish={(values) => {
                                console.log({ values });
                                navigate("/Landing");
                            }}><div><h3>User Login Form</h3></div>
                                <Form.Item name="email" label="email:" rules={[
                                    {
                                        required: true,
                                    },
                                    { type: 'email' },
                                    { validator: validateEmail }
                                ]} hasFeedback>
                                    <Input placeholder='Enter your email' value={email} onChange={handleEmailChange}></Input>
                                </Form.Item>
                                <Form.Item name="password" label="Password:" rules={[
                                    {
                                        required: true,
                                    },
                                    { type: "password" },
                                    { validator: validatePassword }
                                ]} hasFeedback>
                                    <Input.Password placeholder='Enter your password' value={password} onChange={handlePasswordChange} />
                                </Form.Item>
                                <Form.Item name="Agreement" valuePropName='checked' rules={[
                                    {
                                        required: true,
                                        message: 'please confirm my terms and conditions'
                                    },

                                ]} hasFeedback>
                                    <Checkbox>Agree to our terms and condition</Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <Space>
                                        <Button type="primary" onClick={handleLogin}>Login</Button>
                                        <Button type="primary" onClick={handleSignup}>Sign up</Button>
                                    </Space>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                ) :
                    (
                        <div className='main-page' >
                            <div className='center'>
                                <Form autoComplete='off' className='second' layout='vertical' onFinish={(values) => {
                                    console.log({ values });
                                }
                                }>
                                    <Form.Item name="FullName" label="Full Name:" className='form-item' rules={[
                                        {
                                            required: true,
                                            message: 'please enter the Name'
                                        },
                                        { min: 3 },
                                    ]} hasFeedback>
                                        <Input placeholder='Enter your Name' value={name} onChange={handleNameChange} ></Input>
                                    </Form.Item>
                                    <Form.Item name="email" label="email:" rules={[
                                        {
                                            required: true,
                                            message: 'please enter the proper email'
                                        },
                                        { type: 'email' },
                                    ]} hasFeedback>
                                        <Input placeholder='Enter your email' value={email} onChange={handleEmailChange}></Input>
                                    </Form.Item>
                                    <Form.Item name="password" label="Password:" rules={[
                                        {
                                            required: true,
                                        },
                                        { type: "password" },
                                        { validator: validateLoginPassword }
                                    ]} hasFeedback>
                                        <Input.Password placeholder='Enter your password' value={password} onChange={handlePasswordChange} />
                                    </Form.Item>
                                    <Form.Item name="confirmPassword" label="Comfirm Password:"
                                        dependencies={['password']}
                                        rules={[
                                            { 
                                                required: true,
                                                message: "please confirm your password"
                                            },
                                            ({ getFieldValue }) => ({ 
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                                },
                                            })

                                        ]} hasFeedback>
                                        <Input.Password placeholder='Enter confirm Password' value={password} onChange={handlePasswordChange} />
                                    </Form.Item>
                                    <Form.Item name="gender" label="Gender:" className='gender'>
                                        <Select placeholder='Enter your Gender'>
                                            <Select.Option value="male">male</Select.Option>
                                            <Select.Option value="Female">Female</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Date of Birth:" className='gender floating' rules={[
                                        {
                                            required: true,
                                            message: 'please enter the date of birth'
                                        },
                                    ]} hasFeedback>
                                        <DatePicker picker='date' placeholder='date of birth' id='age' />
                                    </Form.Item>
                                    <Form.Item name="Agreement" valuePropName='checked' rules={[
                                        {
                                            required: true,
                                            message: 'please confirm my terms and conditions'
                                        }
                                    ]} hasFeedback>
                                        <Checkbox>Agree to our terms and condition</Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Space>
                                            <Button type="primary" onClick={handleGoBack}>Already have an Account</Button>
                                            <Button type="primary" htmlType='submit' onClick={handleDirectLogin}>log in</Button>
                                        </Space>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    )
            }
        </>
    )
}
export default Antdesign;