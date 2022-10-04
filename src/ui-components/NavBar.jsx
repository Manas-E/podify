/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
import logo from '../logo_bg.png'
import '../App.css'
import Avatar from "react-avatar";
import colors from '../utils/data.json'

export default function NavBar(props) {
  const { overrides, user, signOut, ...rest } = props;

  console.log(user);
  return (
    <Flex
      gap="20px"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="transparent"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo29767073")}
      >
        <Image
          src={logo}
          width="278px"
          height="100px"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="32px"
        width="1287px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="1287px"
        height="45px"
        position="relative"
        padding="0px 24px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <Flex
          gap="40px"
          width="fit-content"
          height="43px"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32129767076")}
        >
          <Badge
            display="flex"
            gap="10px"
            width="fit-content"
            height="43px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="32px"
            padding="8px 12px 8px 12px"
            backgroundColor="rgba(68,176,238,1)"
            size="default"
            variation="default"
            children={ user.username ? "Sign Out": "Sign In" } 
            onClick={signOut}
            className="badge"
            {...getOverrideProps(overrides, "Badge34514580")}
          ></Badge>
          { user.username ? <>
            {/* <Badge
            display="flex"
            gap="10px"
            width="fit-content"
            height="42px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="32px"
            padding="8px 12px 8px 12px"
            backgroundColor="rgba(68,176,238,1)"
            size="default"
            variation="default"
            children="Library"
            className="badge"
            {...getOverrideProps(overrides, "Badge34514578")}
          ></Badge> */}
        <Avatar round={true} size="50px" color={Avatar.getRandomColor('sitebase', colors)} name={user.attributes.name} />

          
          </>  : null}
          
        </Flex>
     
      </Flex>
    </Flex>
  );
}
