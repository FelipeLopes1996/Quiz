import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/widget";
import QuizLogo from "../src/components/QuizLogo";
import Footer from "../src/components/footer";
import GitHubComer from "../src/components/gitHubComer";
import QuizBackground from "../src/components/quizBackground";

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
  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <p> The title </p>
          </Widget.Header>
          <Widget.Content>
            <p> content </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <p> The title </p>
          </Widget.Header>
          <Widget.Content>
            <p> content </p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubComer />
      </QuizContainer>
    </QuizBackground>
  );
}
