import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/contacts',
});

// All
export async function getContacts() {
    return await api.get('/all-contact');
}
// By ID
export async function getContactById(id) {
    return await api.get(`/contact-by-id/${id}`);
}
// Add
export async function addContact(contactData) {
    return await api.post('/create-contact', contactData);
}
// Delete
export async function deleteContact(id) {
    return await api.delete(`/delete-contact/${id}`);
}
// Update
export async function updateContact(id, contactData) {
    return await api.post(`/update-contact/${id}`, contactData);
}
