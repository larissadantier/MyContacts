import {
  useEffect, useState, useRef,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';
import { showToast } from '../../utils/showToast';

export default function EditContact() {
  const { id } = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const contactFormRef = useRef(null);

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        contactFormRef.current.setFieldsValues(contact);
        setIsLoading(false);
        setContactName(contact.name);
      } catch {
        history.push('/');
        showToast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, history]);

  async function handleSubmit() {
    console.log('riririr');
  }
  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar Alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
