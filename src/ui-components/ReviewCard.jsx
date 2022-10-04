/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useEffect, useRef } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Divider, Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import '../App.css'

export default function ReviewCard(props) {
  const { overrides, title, date, description, imageUrl,setShowMusicPlayer,saveToLib, ...rest } = props;
  
  const reviewRef = useRef();

useEffect(() => {
  reviewRef.current.scrollIntoView() 

},[])

  return (
    <div style={{display:"flex",justifyContent:"center"}} id="review-card"   ref={reviewRef}>
    <Flex
      gap="0"
      width="460px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"

      {...rest}
      {...getOverrideProps(overrides, "ReviewCard")}
    >
 
      <Flex
        gap="24px"
        direction="column"
        width="460px"
        grow="1"
        basis="460px"
        alignSelf="stretch"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        className="reviewCard"

        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title")}
        >
          <Flex
            height="24px"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 44px 0px 0px"
            justifyContent="space-between"
            {...getOverrideProps(overrides, "Frame")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={title}

              {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
            ></Text>
            <MyIcon
              width="36px"
              height="36px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="bookmark_border"
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
          </Flex>
        </Flex>
        <Flex
          gap="8px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="244px"
            grow="1"
            basis="244px"
            position="relative"
            padding="16px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={date}
            {...getOverrideProps(overrides,date )}
          ></Text>
     
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            className="line-clamp"
            children={description}
            {...getOverrideProps(
              overrides,
              {description}
            )}
          ></Text>
        </Flex>
        <Flex
          gap="50px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="space-between"
          objectFit="cover"
          position="relative"
          padding="24px 0px 24px 0px"
          justifyContent="center"
          {...getOverrideProps(overrides, "Buttons")}
        >
          {/* <Badge
            display="flex"
            gap="10px"
            width="150px"
            height="48px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="32px"
            backgroundColor="rgba(68,176,238,1)"
            fontSize="12px"
            lineHeight="12px"
            size="small"
            variation="default"
            children="Save"
            className="badge"
            onClick={saveToLib}
            {...getOverrideProps(overrides, "Badge29766838")}
          ></Badge> */}
          <Badge
            display="flex"
            gap="10px"
            width="150px"
            height="48px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="32px"
            backgroundColor="rgba(68,176,238,1)"
            fontSize="12px"
            lineHeight="12px"
            size="small"
            variation="default"
            children="Listen"
            className="badge"
            onClick={()=>setShowMusicPlayer(true)}
            {...getOverrideProps(overrides, "Badge34592694")}
          ></Badge>
        </Flex>
      </Flex>
    </Flex>
    </div>
    );
}
