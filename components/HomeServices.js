import React, { useState, useCallback, useMemo } from "react";
import Box from "./Box";
import Title from "./Title";
import BoxContent from "./BoxContent";
import BoxList from "./BoxList";
import Button from "./Button";
import useMobile from "../hooks/useMobile";
import HomeServicesContent, { getByKey } from "./HomeServicesContent";
import { scrollTo } from "../helpers";

const HomeServices = (props) => {
  const [activeListKey, setActiveListKey] = useState("aplicativos");
  const isMobile = useMobile();
  const content = useMemo(() => getByKey(activeListKey) || {}, [activeListKey]);
  const onListKeySelected = useCallback((key) => setActiveListKey(key), [
    setActiveListKey,
  ]);

  return (
    <Box
      {...props}
      asideProps={{
        style: {
          width: 240,
          flex: "0 240 240px",
        },
      }}
      aside={
        !isMobile && (
          <HomeServicesAside
            activeListKey={activeListKey}
            onListKeySelected={onListKeySelected}
          />
        )
      }
    >
      <Title subTitle={content.label} title={<h2>{content.title}</h2>} />
      {isMobile && (
        <HomeServicesAside
          activeListKey={activeListKey}
          onListKeySelected={onListKeySelected}
        />
      )}
      <BoxContent>
        {content.content}
        <br />
        <br />
        <Button
          onClick={() => {
            scrollTo(props.contactAnchorRef.current);
          }}
        >
          Entre em contato comigo
        </Button>
      </BoxContent>
    </Box>
  );
};

const HomeServicesAside = ({ activeListKey, onListKeySelected = () => {} }) => {
  const list = HomeServicesContent;

  const content = useMemo(() => getByKey(activeListKey) || {}, [activeListKey]);

  const _onListKeySelected = useCallback(
    (content) => {
      onListKeySelected(content?.key);
    },
    [onListKeySelected]
  );
  return (
    <>
      <img
        src="/img/03.png"
        height="160"
        srcSet="/img/03.png 1x, /img/03@2x.png 2x,"
        alt=""
        className="brightness--2 hide-mobile"
        style={{ marginBottom: 16 }}
      />
      <BoxList
        list={list}
        onItemSelected={_onListKeySelected}
        activeItem={content}
      ></BoxList>
    </>
  );
};

export default HomeServices;
