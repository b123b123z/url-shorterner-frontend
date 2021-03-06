import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setHasError(false);

      if (longUrl) {
        try {
          setIsLoading(true);
          const res = await getRedirectUrl(longUrl);
          setShortUrl(res.data);
        } catch (e) {
          console.log(e);
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [longUrl]);

  let feedback = null;

  if (shortUrl) {
    feedback = (
      <Text>
        Your shortened URL is:
        <br />
        {shortUrl}
      </Text>
    );
  }

  if (hasError) {
    feedback = <Text>Opps ❌ Something wrong happened, please double check your URL!</Text>;
  }

  if (isLoading) {
    feedback = <CircularProgress style={{ marginTop: '20px' }} />;
  }

  return (
    <Wrapper>
      <WelcomeText>Welcome! 👋</WelcomeText>
      <UrlForm setLongUrl={setLongUrl} setHasError={setHasError} />
      {feedback}
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
  animation-delay: 0ms;
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
