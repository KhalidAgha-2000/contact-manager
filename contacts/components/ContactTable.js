import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import FalidtoFetch from './FalidtoFetch';

const ContactTable = ({ contacts, loading, handleDelete }) => {

    useEffect(() => {
    }, [contacts])


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="header d-flex align-items-center justify-content-between">
                    {/* back home  */}
                    <div>
                        <Link href={'/'}>
                            <button className="btn btn-light fw-medium">
                                <i className="bi bi-house-door mx-1" />Home
                            </button>
                        </Link>
                    </div>
                    {/* title  */}
                    <h1 className="title fs-3 text-uppercase ">Contact List</h1>
                    {/* add  */}
                    <div>
                        <Link href={'/contacts/Add'}>
                            <button className="btn btn-primary fw-medium">
                                <i className="bi bi-plus-lg mx-1" />Add new
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Loading Spin  */}
            {loading ? <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> :
                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-12">
                        <div className="table-responsive" style={{ height: "75vh", overflowY: "auto" }}>
                            <>
                                {contacts.length === 0 ? (
                                    // FalidtoFetch - Or no data in database
                                    <FalidtoFetch />
                                ) : (<table className="table table-bordered table-hover  ">
                                    <thead className='z-3 ' style={{ position: "sticky", top: -1 }}>
                                        <tr>
                                            <th className='bg-secondary text-light text-uppercase'> Full Name</th>
                                            <th className='bg-secondary text-light text-uppercase'> Email</th>
                                            <th className='bg-secondary text-light text-uppercase'> Phone Number</th>
                                            <th className='bg-secondary text-light text-uppercase'> Country</th>
                                            <th className='bg-secondary text-light text-uppercase'> City</th>
                                            <th className="text-center bg-secondary text-light text-uppercase">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {contacts.map((contact) => (
                                            <tr key={contact.id} >
                                                <td className="py-3 text-uppercase">{contact.full_name}</td>
                                                <td className="py-3">{contact.email}</td>
                                                <td className="py-3">{contact.phone_number}</td>
                                                <td className="py-3">{contact.country}</td>
                                                <td className="py-3">{contact.city}</td>
                                                <td className="d-flex justify-content-around py-3 view overlay">
                                                    <Link href={`/contacts/${contact.id}`}>
                                                        <i className="bi bi-pencil-fill hover-shadow text-success cursor-pointer" />
                                                    </Link>
                                                    <i onClick={() => handleDelete(contact.id)}
                                                        className="bi bi-trash-fill text-danger  cursor-pointer" />
                                                </td>
                                            </tr>)
                                        )}
                                    </tbody>
                                </table>
                                )}
                            </>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default ContactTable
