/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../assets/images/svg/icons/arrow.svg';
import edit from '../../assets/images/svg/icons/edit.svg';
import trash from '../../assets/images/svg/icons/trash.svg';
import sad from '../../assets/images/svg/sad.svg';
import emptyBox from '../../assets/images/svg/empty-box.svg';
import magnifierQuestion from '../../assets/images/svg/magnifier-question.svg';

import formatPhone from '../../utils/formatPhone';
import { showToast } from '../../utils/showToast';

import Loader from '../../components/Loader';
import Button from '../../components/Button';

import ContactsService from '../../services/ContactsService';

import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
  EmptyContainer,
  SearchNotFoundContainer,
} from './styles';
import Modal from '../../components/Modal';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeignDelete, setContactBeignDelete] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  function handleDeleteContact(contact) {
    setContactBeignDelete(contact);
    setIsDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
    setContactBeignDelete(null);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);

      await ContactsService.deleteContact(contactBeignDelete.id);
      setContacts((prevState) => prevState.filter(
        (contact) => contact.id !== contactBeignDelete.id,
      ));
      handleCloseDeleteModal();

      showToast({
        type: 'success',
        text: 'Contato deletado com sucesso',
      });
    } catch {
      showToast({
        type: 'danger',
        text: 'Ocorreu um erro ao deleter o contato!',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        title={`Tem certeza que deseja remover o contato ”${contactBeignDelete?.name}”?`}
        danger
        visible={isDeleteModalVisible}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
        isLoading={isLoadingDelete}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            placeholder="Pesquisar contato..."
          />
        </InputSearchContainer>
      )}

      <Header justifyContent={
        hasError
          ? 'flex-end'
          : (
            contacts.length > 0
              ? 'space-between'
              : 'center'
          )
        }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
          <EmptyContainer>
            <img src={emptyBox} alt="emptyBox" />

            <p>
              Você ainda não tem nenhum contato cadastrado!
              Clique no botão <strong>”Novo contato”</strong> à cima
              para cadastrar o seu primeiro!
            </p>
          </EmptyContainer>
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="magnifierQuestion" />
              <span>
                Nenhum resultado foi encontrado para <strong>”{searchTerm}”</strong>.
              </span>
            </SearchNotFoundContainer>
          )}

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
                  : <span>Sem e-mail</span>}
                {contact.phone
                  ? <span>{formatPhone(`${contact.phone}`)}</span>
                  : <span>Sem número</span>}
              </div>

              <div className="actions">
                <Link to={`edit/${contact.id}`}>
                  <img src={edit} alt="Editar" />
                </Link>
                <button type="button" onClick={() => handleDeleteContact(contact)}>
                  <img src={trash} alt="Lixo" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
