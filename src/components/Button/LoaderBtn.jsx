import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

export const LoaderBtn = ({
  text,
  status,
  disabled = false,
  icon: Icon = null,
  type = 'button',
  onClick = null,
  onSubmit = null,
}) => {
  return (
    <div>
      <Button
        variant="dark"
        disabled
        status={status}
        type={type}
        // disabled={disabled}
        onClick={onClick}
        onSubmit={onSubmit}
      >
        <Spinner
          as="span"
          variant="light"
          size="sm"
          role="status"
          aria-hidden="true"
          animation="border"
        />
        Loading...
      </Button>
    </div>
  );
};

LoaderBtn.propTypes = {
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  status: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};
