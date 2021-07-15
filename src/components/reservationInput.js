import styled from 'styled-components';
import theme from './theme';
import { Form, Formik } from 'formik';
import ErrorText from './form/error';

import Button from './button';

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  margin-top: 100px;

`;

const Input = styled.input`
  margin: 10px 5px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 7px;
  box-sizing: border-box;
  width: 50%;
  :focus {
    outline-color: ${theme.colors.primary};
  }
`;

const ReserveButtom = styled(Button)`
  margin: 10px 5px;
  width: 50%;
`;

export const ReserveForm = (props) => (
  <Formik initialValues={{ startDate: '', endDate: '' }} {...props}>
    {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
      <Form>
        <FormGroup style={{ minWidth: 250 }}>
          {errors.genericError && <ErrorText>{errors.genericError}</ErrorText>}
          <Input
            name="Check in"
            id="Check in"
            placeholder="Check in"
            onChange={handleChange('Check in')}
            onBlur={handleBlur('Check in')}
            error={errors.checkIn}
            value={values.checkIn}
          />
          <Input
            id="Check out"
            name="Check out"
            type="Check out"
            placeholder="Check out"
            onChange={handleChange('Check out')}
            onBlur={handleBlur('Check out')}
            error={errors.checkOut}
            value={values.checkOut}
          />
          <ReserveButtom primary large onClick={handleSubmit} type="submit">
            Reserve
          </ReserveButtom>
        </FormGroup>
      </Form>
    )}
  </Formik>
);
