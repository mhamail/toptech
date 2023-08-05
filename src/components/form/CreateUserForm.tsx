"use client"
import React, { useState } from 'react'
import { postUser } from '@/action/user'
import { useRouter } from "next/navigation";

interface IUser {
    name: string,
    email: string,
    phone: number | null,
    linkedin: string,
    company: string
}

const CreateUserForm = () => {
    const [values, setValues] = useState<IUser>({
        name: "",
        email: "",
        phone: null,
        linkedin: "",
        company: ""
    })
    const { name, email, phone, linkedin, company } = values;
    const { refresh } = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        if (name === "phone") {
            setValues({ ...values, phone: Number(value) })
        }
        else {
            setValues({ ...values, [name]: value })
        }
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await postUser(values)
            refresh();
            setValues({
                name: "",
                email: "",
                phone: null,
                linkedin: "",
                company: ""
            })
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <div className='shadow-lg p-5'>
            <form className='space-y-2' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label>
                        Name:
                    </label>
                    <input
                        type='text'
                        placeholder='Enter Name'
                        className='p-2 mb-2 border-2'
                        value={name}
                        name='name'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label>
                        Email:
                    </label>
                    <input
                        type='text'
                        placeholder='Enter Email'
                        className='p-2 mb-2 border-2'
                        value={email}
                        name='email'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label>
                        Number:
                    </label>
                    <div>
                        <input
                            className='p-2 mb-2 border-2'
                            type="tel"
                            value="+92"
                            size={2}
                            disabled
                        />
                        <input
                            className='p-2 mb-2 border-2'
                            type="tel"
                            name="phone"
                            value={phone || ""}
                            maxLength={10}
                            placeholder="Enter your number"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label>
                        Linkedin Url:
                    </label>
                    <input
                        type='text'
                        placeholder='Enter Linkedin Url'
                        className='p-2 mb-2 border-2'
                        value={linkedin}
                        name='linkedin'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label>
                        Company:
                    </label>
                    <input
                        type='text'
                        placeholder='Enter Company'
                        className='p-2 mb-2 border-2'
                        value={company}
                        name='company'
                        onChange={handleChange}
                    />
                </div>
                <button 
                className='p-2 px-6 rounded-lg text-white hover:text-black bg-green-400'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateUserForm