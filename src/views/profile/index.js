import React, { useEffect } from 'react';
import Spinner from '../../components/spinner';
import useProfile from '../../state/profile/hooks/useProfile';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import ReserveTable from '../../components/reservationTable';
import { ProfileContainer, ReservationNotFound } from './components';
import Alert from '@material-ui/lab/Alert';
import * as jwt from 'jsonwebtoken';
import ProfileSetting from '../../components/profileSetting';

const Profile = () => {
  const accessToken = localStorage.getItem('access_token');
  const user = jwt.decode(accessToken).sub;

  const [profile, getUser, updateUser, getReservationbyUser, isLoading, error] = useProfile();
  const reservation = profile?.reservations;
  const hasReservations = reservation?.length > 0;
  const profileInfo = {
    userid: profile.userid,
    email: profile.email,
    firstName: profile.firstName,
    lastName: profile.lastName,
    role: profile.role
  };
  useEffect(() => {
    getUser(user);
    getReservationbyUser(user);
  }, []);

  const handleSubmit = async (values, actions) => {
    // Submit Updates
    if (!values.email) {
      values.email = profileInfo.email;
    }
    if (!values.firstName) {
      values.firstName = profileInfo.firstName;
    }
    if (!values.lastName) {
      values.lastName = profileInfo.lastName;
    }
    updateUser(profileInfo.userid, values);
    // reset form
    actions.resetForm();

  };

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Spinner show={isLoading} />
      <ProfileContainer>
        <ProfileSetting profileInfo={profileInfo} onSubmit={handleSubmit} />
      </ProfileContainer>
      {hasReservations ? (
        <ReserveTable values={reservation} />
      ) : (
        <ReservationNotFound>No Reservations</ReservationNotFound>
      )}
    </motion.div>
  );
};

export default Profile;
