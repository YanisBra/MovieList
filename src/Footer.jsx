import styled from "styled-components";

export default function Footer() {
  return (
    <FooterDiv>
      <p>Yanis Brahimi © 2023</p>
    </FooterDiv>
  );
}

//CSS

const FooterDiv = styled.footer`
  font-size: 12px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
