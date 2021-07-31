import styled from 'styled-components';
import theme from './theme';
import { Form, Formik } from 'formik';
import ErrorText from './form/error';

import Button from './button';

const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  // flex-grow: 1;
  // flex-shrink: 1;
  margin: 20px auto;
`;

const Input = styled.input`
  font-family: poppins;
  // position: relative;
  margin: 10px 5px;
  border-radius: 20px;
  border: 1px solid #e6e6e6;
  padding: 10px;
  box-sizing: border-box;
  width: 165px;
  height: 40px;
  :focus {
    outline-color: ${theme.colors.primary};
  }
`;

export const Error = styled.div`
  position: relative;
  color: #ed4337;
  font-weight: 500;
  margin: 1rem 0;
  font-size: 0.8rem;
  max-width: 250px;
  // line-height: 1.5;
`;

const ReserveButton = styled(Button)`
  font-size: 12px;
  margin: 10px 10px;
  height: 40px;
  width: fit-content;
  @media screen and (max-width: 900px) {
    font-size: 9px;
  }
`;

export const ReserveForm = props => (
  <Formik initialValues={{ startDate: '', endDate: '' }} {...props}>
    {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
      <Form>
        <FormGroup style={{ minWidth: 250, height: '50px' }}>
          <Input
            name="startDate"
            id="startDate"
            type="date"
            placeholder="yyyy/mm/dd"
            onChange={handleChange('startDate')}
            onBlur={handleBlur('startDate')}
            error={errors.startDate}
            value={values.startDate}
          />
          <Input
            name="endDate"
            id="endDate"
            type="date"
            placeholder="yyyy/mm/dd"
            onChange={handleChange('endDate')}
            onBlur={handleBlur('endDate')}
            error={errors.endDate}
            value={values.endDate}
          />
          <ReserveButton primary large onClick={handleSubmit} type="submit">
            See Availability
          </ReserveButton>
        </FormGroup>
      </Form>
    )}
  </Formik>
);
