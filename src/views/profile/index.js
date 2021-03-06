import React, { useEffect } from 'react';
import Spinner from '../../components/spinner';
import useProfile from '../../state/profile/hooks/useProfile';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import UserReserveTable from '../../components/userReserveTable';
import { Heading, ProfileContainer, ReservationNotFound } from './components';
import Alert from '@material-ui/lab/Alert';
import ProfileSetting from '../../components/profileSetting';

const Profile = () => {
  const [
    profile,
    getUser,
    updateUser,
    updateReservation,
    deleteReservation,
    isLoading,
    error,
    isUpdated
  ] = useProfile();

  const reservationList = profile?.reservations;
  const hasReservations = reservationList?.length > 0;

  const profileInfo = {
    userid: profile.userid,
    email: profile.email,
    firstName: profile.firstName,
    lastName: profile.lastName,
    role: profile.role
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (values, actions) => {
    // Submit Updates
    if (values.email || values.firstName || values.lastName) {
      if (!values.email) {
        values.email = profileInfo.email;
      }
      if (!values.firstName) {
        values.firstName = profileInfo.firstName;
      }
      if (!values.lastName) {
        values.lastName = profileInfo.lastName;
      }
      await updateUser(values);
    }
    // reset form
    actions.resetForm();
  };

  const handleEdit = async (currentReservation, value) => {
    if (currentReservation) {
      await updateReservation(currentReservation, value);
    }
  };

  const handleDelete = async values => {
    if (values) {
      await deleteReservation(values);
    }
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Spinner show={isLoading} />
      <ProfileContainer>
        <Heading>Account Settings</Heading>
        {isUpdated && <Alert severity="success"> {`Updated:)`}</Alert>}
        <ProfileSetting profileInfo={profileInfo} onSubmit={handleSubmit} />
        {error && <Alert severity="error">{error}</Alert>}
      </ProfileContainer>
      {hasReservations ? (
        <UserReserveTable values={reservationList} onUpdate={handleEdit} onDelete={handleDelete} />
      ) : (
        <ReservationNotFound>No Reservations</ReservationNotFound>
      )}
    </motion.div>
  );
};

export default Profile;
