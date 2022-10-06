import introImg from "../../../../assets/intro-img.png";
import { IntroContainer, IntroContent } from "./styles";

export function Intro (){
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section></section>
        </div>
        <img src={introImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}