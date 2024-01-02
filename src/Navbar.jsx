import styled from "styled-components";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Ajoute un effet de défilement fluide
    });
  };

  return (
    <StyledNavbar>
      <a className="content" onClick={scrollToTop}>
        <img src="/images/Popcorn.svg" alt="logo" />
        <p>PopCorn</p>
      </a>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  height: 50px;
  z-index: 2;
  padding: 4px;
  /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); */
  backdrop-filter: blur(3px);
  background-color: rgba(36, 36, 36, 0.2);

  .content {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 10px;
    margin-left: 10px;
    padding-right: 20px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: wheat;
    width: fit-content;
    cursor: pointer;

    img {
      height: 30px;
    }
  }
`;

export default Navbar;
