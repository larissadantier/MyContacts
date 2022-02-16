import {
  Container, Header, ListContainer, Card,
} from './styles';
import arrow from '../../assets/images/svg/icons/arrow.svg';
import edit from '../../assets/images/svg/icons/edit.svg';
import trash from '../../assets/images/svg/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>
          3 contatos
        </strong>
        <a href="/">Novo Contato</a>
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
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Francine Dantier</strong>
              <small>instagram</small>
            </div>

            <span>francine@hotmail.com</span>
            <span>(22) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Lixo" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
