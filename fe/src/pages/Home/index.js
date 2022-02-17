import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';
import arrow from '../../assets/images/svg/icons/arrow.svg';
import edit from '../../assets/images/svg/icons/edit.svg';
import trash from '../../assets/images/svg/icons/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>

      <Modal danger />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contado..." />
      </InputSearchContainer>

      <Header>
        <strong>
          3 contatos
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Larissa Dantier</strong>
              <small>instagram</small>
            </div>

            <span>larissa@hotmail.com</span>
            <span>(22) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Editar" />
            </Link>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
