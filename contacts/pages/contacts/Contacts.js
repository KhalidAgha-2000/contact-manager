import { useEffect, useState } from "react"
import { deleteContact, getContacts } from "../api/contacts"
import ContactTable from "../../components/ContactTable"
import { usePassContext } from '../../contexts/PassContext';
import IsPassBlock from '../../components/IsPass';

const Contacts = ({ fetchedData }) => {

    const [contactsData, setContactsData] = useState(fetchedData);
    const [loading, setLoading] = useState(true)
    const { setIsPass } = usePassContext();

    useEffect(() => {
        setLoading(false)
    }, [contactsData]);

    // Delete
    const handleDelete = async (id) => {
        try {
            const response = await deleteContact(id);
            setIsPass({ pass: true, message: response.data.message })
            setContactsData(contactsData.filter((contact) => contact.id !== id))

        } catch (error) {
            setIsPass({ pass: false, message: 'something went wrong' })
        }
        setTimeout(() => { setIsPass({ message: '' }) }, 2000);
    };

    return (
        <>
            <IsPassBlock />
            <ContactTable
                loading={loading}
                setLoading={setLoading}
                contacts={contactsData}
                handleDelete={handleDelete} />
        </>
    );
};
export default Contacts


export const getServerSideProps = async () => {

    const response = await getContacts()
    return {
        props: {
            fetchedData: response.data.data,
        },
    };

};