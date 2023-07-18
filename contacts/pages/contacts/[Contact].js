import React, { useState } from 'react'
import { getContactById, updateContact } from "../api/contacts"
import { usePassContext } from '../../contexts/PassContext';
import IsPassBlock from '../../components/IsPass';
import Link from 'next/link';

const Contact = ({ contact }) => {

    const { setIsPass } = usePassContext();
    const [formData, setFormData] = useState({});

    //  Change inpusts
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    // Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateContact(contact.id, formData);
            setIsPass({ pass: true, message: response.data.message })
        } catch (error) {
            setIsPass({ pass: false, message: 'something went wrong' })
        }
        setTimeout(() => {
            setIsPass({ message: '' })
        }, 2000);
    }

    return (
        <div className="container mt-4">
            {/* Alert Block */}
            <IsPassBlock />

            <h1 className='fs-4 text-uppercase'>Edit <span className='text-secondary'>{contact.full_name}</span>'s data</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="full_name" className="form-label m-2">Full Name</label>
                    <input type="text" className="form-control" name="full_name" required
                        value={formData.full_name || contact.full_name} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="full_name" className="form-label m-2">Email</label>
                    <input type="email" className="form-control" name="email" required
                        value={formData.email || contact.email} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="full_name" className="form-label m-2"> Number</label>
                    <input type="text" className="form-control" name="phone_number" required
                        value={formData.phone_number || contact.phone_number} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="full_name" className="form-label m-2">Country</label>
                    <input type="text" className="form-control" name="country" required
                        value={formData.country || contact.country} onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="full_name" className="form-label m-2">City</label>
                    <input type="text" className="form-control" name="city" required
                        value={formData.city || contact.city} onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-success">
                    <i className='bi bi-check2-square' />Save Changes
                </button>

                <Link href={'/contacts/Contacts'}>
                    <button type="submit" className="btn btn-light mx-4 ">
                        <i className="bi bi-arrow-left fw-  mx-1" />Go Back
                    </button>
                </Link>

            </form>
        </div>
    );
};

export default Contact


export async function getServerSideProps({ params }) {
    const Contact = params.Contact;
    const response = await getContactById(Contact);
    const contactData = response.data.data;

    return {
        props: {
            contact: contactData,
        },
    };
}