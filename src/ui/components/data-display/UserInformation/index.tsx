import React from "react";
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
} from "./index.style";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
      <UserName>{props.name}</UserName>
      <RatingStyled readOnly value={props.rating} />
      <UserDescription>{props.description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
