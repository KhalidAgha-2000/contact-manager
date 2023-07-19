import React, { useState } from 'react'
import { addContact } from "../api/contacts"
import Link from "next/link";
import { usePassContext } from '../../contexts/PassContext';
import IsPassBlock from '../../components/IsPass';
const Add = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        country: '',
        city: '',
    });

    const { setIsPass } = usePassContext();

    //  Change inpusts
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addContact(formData);
            setIsPass({ pass: true, message: response.data.message })
        } catch (error) {
            setIsPass({ pass: false, message: 'something went wrong' })
        }
        setTimeout(() => { setIsPass({ message: '' }) }, 2000)
        setFormData({ full_name: '', email: '', phone_number: '', city: '', country: '' })
    };

    return (
        <div className="container mt-4">
            {/* Alert Block */}
            <IsPassBlock />
            <h1 className='fs-4 text-uppercase'>Add Contact</h1>
            <p className='fw-lighter'>Please fill in all required (*) fields before submitting the form.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="full_name" className="form-label">
                        Full Name <sup className='text-danger fw-bolder'>*</sup>
                    </label>
                    <input type="text" className="form-control" id="full_name" name="full_name" required
                        value={formData.full_name} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email <sup className='text-danger fw-bolder'>*</sup>
                    </label>
                    {/* If the type of the input removed, the validation from backend will cover the error */}
                    <input type="email" className="form-control" id="email" name="email" required
                        value={formData.email} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">
                        Phone Number <sup className='text-danger fw-bolder'>*</sup>
                    </label>
                    {/* If the type of the input removed, the validation from backend will cover the error */}
                    <input type="number" className="form-control" id="phone_number" name="phone_number" required
                        value={formData.phone_number} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country <sup className='text-danger fw-bolder'>*</sup>
                    </label>
                    <input type="text" className="form-control" id="country" name="country" required
                        value={formData.country} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                        City <sup className='text-danger fw-bolder'>*</sup>
                    </label>
                    <input type="text" className="form-control" id="city" name="city" required
                        value={formData.city} onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-success">
                    <i className="bi bi-check2-square" /> Done
                </button>

                <Link href={'/contacts/Contacts'}>
                    <button type="submit" className="btn btn-light mx-4 ">
                        <i className="bi bi-arrow-left mx-2" />Go Back
                    </button>
                </Link>

            </form>
        </div>
    )
}

export default Add