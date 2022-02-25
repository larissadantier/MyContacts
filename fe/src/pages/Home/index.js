import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/svg/icons/arrow.svg';
import edit from '../../assets/images/svg/icons/edit.svg';
import trash from '../../assets/images/svg/icons/trash.svg';
import formatPhone from '../../utils/formatPhone';
import Loader from '../../components/Loader';
import {
  Container, Header, ListHeader, Card, InputSearchContainer,
} from './styles';
import delay from '../../utils/delay';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const response = await fetch(`http://localhost:3001/contacts/?orderBy=${orderBy}`);
        await delay(500);

        const json = await response.json();
        setContacts(json);
      } catch (err) {
        console.log('Error', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          placeholder="Pesquisar contado..."
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
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
