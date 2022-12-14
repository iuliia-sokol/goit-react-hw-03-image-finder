import { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';

import {
  ModalOverlay,
  ModalWindow,
  ModalPic,
  ModalDescr,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onkBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <ModalOverlay onClick={this.onkBackdropClick}>
        <ModalWindow>
          <ModalPic src={this.props.src} alt={this.props.alt} />
          <ModalDescr>{this.props.alt}</ModalDescr>
        </ModalWindow>
      </ModalOverlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};
