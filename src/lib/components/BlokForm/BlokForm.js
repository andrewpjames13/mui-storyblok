/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import {
  Form,
  MuiInput,
  MuiSelect,
  MuiSubmit,
  MuiCheckBox,
  MuiRadio,
} from 'rff-wrapper/dist/index.mjs';

import Grid from '../Grid/Grid';

const BlokForm = ({
  content,
  submitButton,
  baseUrl,
  successResponseText,
  errorResponseText,
  method,
}) => {
  const gridItemComponets = {
    MuiInput,
    MuiSelect,
    MuiSubmit,
    MuiCheckBox,
    MuiRadio,
  };

  const [state, setState] = useState({
    successResponse: '',
    errorResponse: '',
  });

  const onSubmit = async (values) => {
    setState({
      successResponse: '',
      errorResponse: '',
    });
    const queryString = Object.keys(values).map(key => `${key}=${values[key]}`).join('&');
    const options = {
      method,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: queryString,
      url: baseUrl,
    };

    try {
      await axios(options);

      return setState({
        successResponse: successResponseText,
        errorResponse: '',
      });
    } catch (err) {
      return setState({
        successResponse: '',
        errorResponse: errorResponseText,
      });
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
    >
      <>
        {content.map((item, index) => (
          <Grid {...item} key={index} gridItemComponets={gridItemComponets} />
        ))}
      </>
      <MuiSubmit {...submitButton[0]} />
      <>
        {state.successResponse && <Typography>{state.successResponse}</Typography>}
        {state.errorResponse && <Typography color="error">{state.errorResponse}</Typography>}
      </>
    </Form>
  );
};

export default BlokForm;

BlokForm.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  submitButton: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  baseUrl: PropTypes.string.isRequired,
  successResponseText: PropTypes.string.isRequired,
  errorResponseText: PropTypes.string.isRequired,
  method: PropTypes.string,
};

BlokForm.defaultProps = {
  method: 'POST',
};
