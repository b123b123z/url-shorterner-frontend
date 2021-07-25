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
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async () => {
      setHasError(false);

      if (longUrl) {
        try {
          const res = await getRedirectUrl(longUrl);
          setShortUrl(res.data);
        } catch (e) {
          console.log(e);
          setHasError(true);
        }
      }
    })();
  }, [longUrl]);

  return (
    <Wrapper>
      <WelcomeText>Welcome! 👋</WelcomeText>
      <UrlForm setLongUrl={setLongUrl} />
      {shortUrl && (
        <Text>
          Your shortened URL is:
          <br />
          {shortUrl}
        </Text>
      )}
      {hasError && <Text>Opps ❌ Something wrong happened, please enter the full URL!</Text>}
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
  font-family: 'Open Sans', sans-serif;
`;

const WelcomeText = styled.div`
  font-size: 50px;
`;

const Text = styled.div`
  margin-top: 30px;
  font-size: 15px;
  text-align: center;
`;

export default Home;
