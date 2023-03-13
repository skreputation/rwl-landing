import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Label from './Label';
import { capitalizeFirstLetter, translate } from '../../translator';
import { LanguageContext } from '../../context/LanguageContext';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FormContent = styled.div`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.red};
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const Input = styled.input`
  display: flex;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: 8px;
`;
const TextArea = styled.textarea`
  display: flex;
  resize: vertical;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: 8px;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.regular};
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  & > *:not(:last-child) {
    margin-right: 16px;
  }
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 16px;
    }
  }
`;

const ErrorMessage = styled(Label)`
  display: block;
  min-height: 12px;
`;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  width: -moz-available;
`;

const Form = () => {
  const { language } = useContext(LanguageContext);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(capitalizeFirstLetter(translate('required', language))),
    email: Yup.string()
      .email('Invalid email address')
      .required(capitalizeFirstLetter(translate('required', language))),
    object: Yup.string(),
    message: Yup.string()
  });

  const { touched, errors, handleChange, handleSubmit } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      email: '',
      object: '',
      message: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  return (
    <FormContainer>
      <FormContent>
        <Label color="#ffff" fontFamily="bold" fontSize={32}>
          write-us
        </Label>
        <Row>
          <Field>
            <Input
              id="name"
              name="name"
              onChange={handleChange}
              error={touched.name && !!errors.name}
              placeholder={translate('your-name-required', language)}
            />
            {errors.name && touched.name ? (
              <ErrorMessage fontFamily="bold" fontSize={12} color="#fff">
                {errors.name}
              </ErrorMessage>
            ) : (
              <ErrorMessage> </ErrorMessage>
            )}
          </Field>
          <Field>
            <Input
              id="email"
              name="email"
              placeholder={translate('your-email-required', language)}
              onChange={handleChange}
              error={touched.email && !!errors.email}
              type="email"
            />
            {errors.email && touched.email ? (
              <ErrorMessage fontFamily="bold" fontSize={12} color="#fff">
                {errors.email}
              </ErrorMessage>
            ) : (
              <ErrorMessage> </ErrorMessage>
            )}
          </Field>
        </Row>
        <Field>
          <Input
            id="object"
            name="object"
            onChange={handleChange}
            error={touched.object && !!errors.object}
            placeholder={translate('object', language)}
          />
          {errors.object && touched.object ? (
            <ErrorMessage fontFamily="bold" fontSize={12} color="#fff">
              {errors.object}
            </ErrorMessage>
          ) : (
            <ErrorMessage> </ErrorMessage>
          )}
        </Field>
        <Field>
          <TextArea
            type="textarea"
            id="message"
            name="message"
            onChange={handleChange}
            error={touched.message && !!errors.message}
            placeholder={translate('message', language)}
          />
          {errors.message && touched.message ? (
            <ErrorMessage fontFamily="bold" fontSize={12} color="#fff">
              {errors.message}
            </ErrorMessage>
          ) : (
            <ErrorMessage> </ErrorMessage>
          )}
        </Field>
        <Label fontSize={32} fontFamily="bold" color="#fff" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleSubmit}>
          submit
        </Label>
      </FormContent>
    </FormContainer>
  );
};

export default Form;
