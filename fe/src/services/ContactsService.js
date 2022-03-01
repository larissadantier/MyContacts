import HttpClient from '../utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/055271ac-68f3-4256-aa8f-42afd8916ff2?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', contact);
  }

  async deleteContact(id) {
    return this.httpClient.post('/contacts', id);
  }
}

export default new ContactsService();
