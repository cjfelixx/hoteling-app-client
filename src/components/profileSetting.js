import theme from './theme';
import { Form, Formik } from 'formik';
import Input from './form/input';
import FormGroup from './form/formGroup';

import Button from './button';

const ProfileSetting = props => {
  const { profileInfo } = props;

  return (
    <>
      
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: ''
        }}
        {...props}>
        {({ handleChange, handleBlur, values, handleSubmit, errors }) => (
          <Form>
            <FormGroup style={{ minWidth: 250 }}>
              <Input
                name="email"
                id="email"
                placeholder={`${profileInfo.email}`}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
                value={values.email}
              />
              <Input
                name="firstName"
                id="firstName"
                type="firstName"
                placeholder={`${profileInfo.firstName}`}
                onChange={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                error={errors.firstName}
                value={values.firstName}
              />

              <Input
                name="lastName"
                id="lastName"
                type="lastName"
                placeholder={`${profileInfo.lastName}`}
                onChange={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                error={errors.lastName}
                value={values.lastName}
              />
              <Button primary large onClick={handleSubmit} type="submit">
                Save
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProfileSetting;
