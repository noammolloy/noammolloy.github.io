import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    // --primary: #7004f4;
    --primary: #6027e1;
    --secondary: #74ACCB;
    scroll-padding-top: 10rem;

    // &.light{

    //   body{
    //     transition: 0.5s;
    //     background-color: #f5f5f5;
    //     color: var(--black);
    //   }

    //   .logo{
    //     color: var(--black);
    //   }

    //   header.header{
    //     transition: 0.5s;
    //     background-color: #f5f5f550;
    //     a{
    //       transition: 0.5s;
    //       color: black;
         
    //       &.button{
    //         color: white;
    //         }
    //     }
    //     .menu,.menu:before, .menu:after{
    //       background-color: var(--black); 
    //     }
    //     .menu.active{
    //       background-color: rgba(555,555,555,0);
    //     }
    //   }

    //   footer.footer{
    //     transition: 0.5s;
    //     background-color: rgba(0,0,0,0.1);
    //     color: var(--black);
    //   }

    //   form{
    //     input,textarea{
    //       transition: 0.5s;
    //       border: solid 1px var(--black);
    //       color: var(--black);
    //       &::placeholder{
    //         transition: 0.5s;
    //         color: var(--black);
    //       }
    //     }
    //   }

    // }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // * {
  //   outline: 1px solid red; /* Highlights all elements */
  // }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    // background-color: var(--black);
    // color: #FFFF;
    background-color: white;
    color: var(--black);
  }

  body, input, textarea, button{
    font-family: "Nunito", serif;
    font-weight: 400;
  }

  header.header{
    // transition: 0.5s;
    background-color: white;
    a{
      transition: 0.5s;
      color: black;
      
    }
    
  }
  
  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    
    background-color: var(--primary);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;

  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  footer.footer{
    // transition: 0.5s;
    background-color: var(--primary);
  }
  
  form{
    input,textarea{
      // transition: 0.5s;
      border: solid 1px var(--black);
      color: var(--black);
      &::placeholder{
        transition: 0.5s;
        color: var(--black);
      }
    }
  }

  .logo{
    font-size: 3rem;
    // color: #FFFF;
    color: var(--black);
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`