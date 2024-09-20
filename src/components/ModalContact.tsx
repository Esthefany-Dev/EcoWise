import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

interface ModalContactProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function ModalContact({ isModalOpen, setIsModalOpen }: ModalContactProps) {
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setIsModalOpen(false);

  const handleSend = () => {
    setShowAlert(true);
    setIsModalOpen(false); 
  };

  return (
    <>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Mensagem enviada com sucesso!
        </Alert>
      )}

      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entre em Contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nomeInput">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailInput">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="seuemail@dominio.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phoneNumberInput">
              <Form.Label>Contato</Form.Label>
              <Form.Control type="tel" placeholder="+55 (xx) x xxxx-xxxx" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="messageInput">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
