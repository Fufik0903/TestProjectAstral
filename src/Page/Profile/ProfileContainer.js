import { useSelector } from "react-redux";
import ProfileComponent from "./ProfileComponent";

const ProfileContainer = () => {
  const profileData = useSelector((state) => state.profile.profileData);
  return <ProfileComponent profileData={profileData} />;
};

export default ProfileContainer;
