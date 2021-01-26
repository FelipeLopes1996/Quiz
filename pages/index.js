/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import db from '../db.json';
import Widget from '../src/components/widget';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/footer';
import GitHubComer from '../src/components/gitHubComer';
import QuizBackground from '../src/components/quizBackground';

// const BackgroudImage = styled.div`
//   background-image: url(${db.bg});
//    flex: 1;
//    background-size: cover;
//    background-position: center;
// `

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title> ALuraQuiz - Modelo Base</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <p> The title </p>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(info) => {
                info.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('fazendo submit');
              }}
            >
              <input
                placeholder="Digite seu Nome"
                onChange={(info) => {
                  // name = info.target.value;
                  setName(info.target.value);
                  console.log(info.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <p> The title </p>
          </Widget.Header>
          <Widget.Content>
            <p> felipe </p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubComer />
      </QuizContainer>
    </QuizBackground>
  );
}
