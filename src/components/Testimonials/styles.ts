import styled from "styled-components";


export const Container = styled.section`
  margin: 5rem;
  margin-bottom: 10rem;
  text-align: center;
  
  h2{
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 900;
  }
  
  h3{
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 10rem;
  }

  .testimonial-carousel {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 100rem;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow:  0px 5px 10px rgba(0, 0, 0, 0.25);
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    position: relative;
  }

  .testimonial {
    // position: absolute;
    min-width: 100%;
    text-align: center;
    padding: 3rem;
    // background-color: #f8f8f8;
    // border-radius: 10px;
    // box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    // border-radius: 10px;
    // box-shadow:  0px 5px 10px rgba(0, 0, 0, 0.25);

    p{
      font-size: 3rem;
      font-family: "Crimson Text", serif;
      font-style: italic;
      letter-spacing: 0.1rem;
    }

    h4{
      font-size: 2.5rem;
      font-weight: 800;

      margin-top: 3.5rem;
      margin-bottom: 1rem;
    }

    h5{
      font-size: 2rem;
      font-weight: normal;
    }

  }

  .arrow {
    filter: none;
    position: absolute;
    // top: 50%;
    // transform: translateY(-50%);
    background: none;
    border: none;
    padding: 0 1rem;
    font-size: 3rem;
    font-weight: 700;
    cursor: pointer;
    color: var(--primary);
    opacity: 0.7;
    z-index: 1;
    -moz-transform:scale(1,2); /* Firefox */
    -ms-transform:scale(1,2); /* IE 9 */
    -o-transform:scale(1,2); /* Opera */
    transform:scale(1,2);

    transition: opacity 0.5s ease;

    &.left-arrow {
      left: 0;
    }

    &.right-arrow {
      right: 0;
    }

    &:not(.disabled):hover{
      opacity: 1;
    }

    &.disabled {
      color: lightgray;
      cursor: default;
    }

  }

  

 

  .arrow:focus {
    outline: none;
  }

`