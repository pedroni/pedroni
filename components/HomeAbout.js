import React, { useState, useCallback, useEffect, useMemo } from "react";
import Box from "./Box";
import Title from "./Title";
import BoxContent from "./BoxContent";
import BoxList from "./BoxList";
import Button from "./Button";
import useMobile from "../hooks/useMobile";
import HomeAboutContent, { getByKey } from "./HomeAboutContent";
import { scrollTo } from "../helpers";
const HomeAbout = (props) => {
  const [activeListKey, setActiveListKey] = useState("ola");
  const isMobile = useMobile();
  const content = useMemo(() => getByKey(activeListKey) || {}, [activeListKey]);
  const onListItemSelected = useCallback((key) => setActiveListKey(key), [
    setActiveListKey,
  ]);
  return (
    <Box
      {...props}
      aside={
        !isMobile && (
          <HomeAboutAside
            activeListKey={activeListKey}
            onListItemSelected={onListItemSelected}
          />
        )
      }
    >
      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />
      {isMobile && (
        <HomeAboutAside
          activeListKey={activeListKey}
          onListItemSelected={onListItemSelected}
        />
      )}
      <BoxContent>
        {content.content}
        <br />
        <br />
        <Button
          onClick={() => {
            scrollTo(props.contactAnchorRef.current)
          }}
        >
          Entre em contato comigo
        </Button>
      </BoxContent>
    </Box>
  );
};

const HomeAboutAside = ({ activeListKey, onListItemSelected = () => {} }) => {
  const list = HomeAboutContent;
  const content = useMemo(() => getByKey(activeListKey) || {}, [activeListKey]);

  const _onListItemSelected = useCallback(
    (content) => {
      onListItemSelected(content?.key);
    },
    [onListItemSelected]
  );
  return (
    <>
      <img
        src="/img/01.png"
        height="160"
        srcSet="/img/01.png 1x, /img/01@2x.png 2x,"
        alt=""
        className="brightness--2 hide-mobile"
        style={{ marginBottom: 16 }}
      />
      <BoxList
        list={list}
        onItemSelected={_onListItemSelected}
        activeItem={content}
      ></BoxList>
    </>
  );
};

export default HomeAbout;
