import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 5%;
  padding-top: 3rem;
  align-items: center;

  

  .logo-image{
    width: 10rem;
  }
  
  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;

    NavHashLink{
      font-weight: bold;
      
    }
    a{
      position: relative;
      padding: 0.6rem;
      font-weight: 600;
      font-size: 2.25rem;
      transition:  0.25s;

      &:hover{
        color: var(--primary);
      }

      &:not(.button){
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.1em;
          background-color: var(--primary);
          transition: transform 0.4s;
          opacity 1;
          transform: scale(0);
          transform-origin: center;
        }

        &:hover::after, &:focus::after{
          transform: scale(0.75);
        }
      }
      

      &.button{
        padding: 0.6rem 2rem;
        color: var(--primary);
        background-color: var(--offColor);
        border: solid;
        border-color: var(--primary);
        
        &:hover{
          background-color: var(--primary);
          color: var(--offColor);
        }

      }
    }

  }


  .menu {
    --s: 4rem; /* control the size */
    --c: var(--secondary); /* the color */
    
    height: var(--s);
    aspect-ratio: 1;
    border: none;
    padding: 0;
    border-inline: calc(var(--s)/2) solid #0000; 
    box-sizing: content-box;
    --_g1: linear-gradient(var(--c) 20%,#0000 0 80%,var(--c) 0) 
          no-repeat content-box border-box;
    --_g2: radial-gradient(circle closest-side at 50% 12.5%,var(--c) 95%,#0000) 
          repeat-y content-box border-box;
    background: 
      var(--_g2) left  var(--_p,0rem) top,
      var(--_g1) left  calc(var(--s)/10 + var(--_p,0rem)) top,
      var(--_g2) right var(--_p,0rem) top,
      var(--_g1) right calc(var(--s)/10 + var(--_p,0rem)) top;
    background-size: 
      20% 80%,
      40% 100%;
    position: relative;
    clip-path: inset(0 25%);
    -webkit-mask: linear-gradient(90deg,#0000,#000 25% 75%,#0000);
    cursor: pointer;
    transition: 
      background-position .3s var(--_s,.3s), 
      clip-path 0s var(--_s,.6s);
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;

    display: none;
    z-index: 1001;
  }
  @media (max-width: 550px){

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      // display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      // transition: opacity 0.25s, visibility 0.25s;
      background-color: #e8ecd4;
      z-index: 1000;
      gap: 1rem;

      a{
        transition: opacity 0s, visibility 0s;
      }

    }

    .menu {
      display: block; 

      &:checked ~ nav{
        opacity: 1;
        visibility: visible;
        // display: flex;
      }
    }

  }
  .menu:before,
  .menu:after {
    content:"";
    position: absolute;
    border-radius: var(--s);
    inset: 40% 0;
    background: var(--c);
    transition: transform .3s calc(.3s - var(--_s,.3s));
  }

  .menu:checked {
    clip-path: inset(0);
    --_p: calc(-1*var(--s));
    --_s: 0s;
  }
  .menu:checked:before {
    transform: rotate(45deg);
  }
  .menu:checked:after {
    transform: rotate(-45deg);
  }
  .menu:focus-visible {
    clip-path: none;
    -webkit-mask: none;
    border: none;
    outline: 0.25rem solid var(--c);
    outline-offset: 0.625rem;
  }
  
`