import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/svg/icons/arrow.svg';
import edit from '../../assets/images/svg/icons/edit.svg';
import trash from '../../assets/images/svg/icons/trash.svg';
import formatPhone from '../../utils/formatPhone';
import {
  Container, Header, ListHeader, Card, InputSearchContainer,
} from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => console.log('Error', error));
  }, []);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contado..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader>
        <button type="button">
          <span>Nome</span>
          <img src={arrow} alt="arrow" />
        </button>
      </ListHeader>

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>
                  {contact.category_name}
                </small>
              )}
            </div>
            {contact.email
              ? <span>{contact.email}</span>
              : <span>Sem E-mail</span>}
            {contact.phone
              ? <span>{formatPhone(`${contact.phone}`)}</span>
              : <span>Sem Número</span>}
          </div>

          <div className="actions">
            <Link to={`edit/${contact.id}`}>
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
