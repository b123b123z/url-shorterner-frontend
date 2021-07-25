import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import UrlForm from './components/UrlForm';
import getRedirectUrl from './api/HomeApi';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Home = () => {
  const [longUrl, setLongUrl] = useState();
  const [shortUrl, setShortUrl] = useState();

  useEffect(() => {
    (async () => {
      if (longUrl) {
        try {
          const res = await getRedirectUrl(longUrl);
          setShortUrl(res.data);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, [longUrl]);

  return (
    <Wrapper>
      <WelcomeText>Welcome! 👋</WelcomeText>
      <UrlForm setLongUrl={setLongUrl} />
      {shortUrl && (
        <p>
          your shortened url is
          {shortUrl}
        </p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  animation-duration: 7000ms;
  animation-delay: 700ms;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const WelcomeText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 50px;
`;

export default Home;
