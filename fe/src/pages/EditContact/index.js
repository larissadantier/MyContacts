import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';
import { showToast } from '../../utils/showToast';

export default function EditContact() {
  const { id } = useParams();
  const history = useHistory();
  const [contact, setContact] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContact() {
      try {
        const response = await ContactsService.getContactById(id);

        setContact(response);
        setIsLoading(false);
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
      <PageHeader title={`Editar ${contact.name}`} />
      <ContactForm buttonLabel="Salvar Alterações" onSubmit={handleSubmit} />
    </>
  );
}
