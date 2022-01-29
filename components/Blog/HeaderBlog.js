import styled from "styled-components";
import { HeroContainer } from "../Home/Header";
import { GenericBadge } from "../GenericBadge";
import Image from "next/image";
import Author from "./Author";

const Container = styled.div`
  display: flex; 
  align-items: center; 
  width: 100%;
  min-height; fit-content; 
  height: 700px; 
  background: ${(props) => props.theme.gradients.backgroundPurpleInverse};
  color: white;


  @media only screen and (max-width: 850px) {
    padding-bottom: 24px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const LeftCol = styled.div`
  height: 331px;
  width: 50%;
  overflow: hidden;
`;

const RightCol = styled.div`
  max-width: 400px;
  display: flex;
  flex-flow: column;
  gap: 28px;
`;

const BottomInfo = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;

const StyledHeroContainer = styled((props) => <HeroContainer {...props} />)`
  gap: 100px;
  justify-content: center;
`;

const HeaderBlog = ({ lastPost }) => {
  return (
    <Container>
      <StyledHeroContainer>
        <LeftCol>
          <div>
            <Image
              src={`/img/posts/${lastPost.featuredImg}`}
              width="540"
              height="331"
              layout="responsive"
            />
          </div>
        </LeftCol>
        <RightCol>
          <TagContainer>
            {lastPost.tags.map((tag, index) => {
              return (
                <GenericBadge key={index} variant="text20">
                  {tag}
                </GenericBadge>
              );
            })}
          </TagContainer>
          <h2>{lastPost.title}</h2>
          <p>{lastPost.summary}</p>
          <BottomInfo>
            <Author
              imgURL={`/img/authors/${lastPost.author}`}
              userName={lastPost.userName}
            />
          </BottomInfo>
        </RightCol>
      </StyledHeroContainer>
    </Container>
  );
};

export default HeaderBlog;