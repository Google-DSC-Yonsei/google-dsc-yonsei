import LoadingScreen from "@components/LoadingScreen";
import { TransitionColorContext } from "@context/TransitionColorContext";
import useEffectOnce from "@hooks/useEffectOnce";
import useHandleAnimationScroll from "@hooks/useHandleAnimationScroll.js";
import { useContext } from "react";
import styled, { useTheme } from "styled-components";
import Banner from "./Banner";
import Introduction from "./Introduction";
import Progress from "./Progress";

function GooglePage() {
  const { handleAnimationStart, handleAnimationComplete } =
    useHandleAnimationScroll();
  const { transitionColorHandler } = useContext(TransitionColorContext);
  const { color } = useTheme();

  useEffectOnce(() => {
    transitionColorHandler(color.red);
  });

  return (
    <>
      <Container>
        <Banner />
        <Introduction />
        <Progress />
      </Container>
      <LoadingScreen
        handleAnimationStart={handleAnimationStart}
        handleAnimationComplete={handleAnimationComplete}
      />
    </>
  );
}

export default GooglePage;

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: "Google Sans", sans-serif;
  perspective: 1px; // for locomotive-scroll element disappearance bug fix.
  background-color: ${(props) => props.theme.backgroundColor.white};
`;
