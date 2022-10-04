/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
import '../App.css'
import extractor from "../utils/extract";
import LoadingIndicator from "../utils/Loader/LoadingIndicator";

export default function HeroLayout4(props) {
  const { overrides, setExtract, ...rest } = props;

  const [loading,setLoading] = useState(false);
  const articleUrl  = useRef();

  let extract = async ()=>{
    setLoading(true);
    let data = await extractor(articleUrl.current.value)
    setExtract(data)
    setLoading(false);
  }

  
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 160px 160px 160px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout4")}
    >
      {loading && <LoadingIndicator/>}

      <Flex
        gap="60px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Text
          fontSize="32px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Convert any Blog into a Podcast"
          className="headline"
          {...getOverrideProps(overrides, "Convert any Blog into a Podcast")}
        ></Text>
        <Flex
          gap="8px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Form")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            shrink="0"
            height="60px"
            position="relative"
            padding="0px 0px 0px 0px"
            placeholder="Enter a URL"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            className="custom-input"
            ref={articleUrl}

            {...getOverrideProps(overrides, "TextField")}
            
          ></TextField>
          <Button
            display="flex"
            gap="0"
            width="187px"
            justifyContent="center"
            alignItems="center"
            grow="1"
            basis="187px"
            height="60px"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Podify"
            className="custom-btn"
            onClick={extract}
            {...getOverrideProps(overrides, "Podify")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
