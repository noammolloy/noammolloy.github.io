import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 5%;
  padding-top: 3rem;

  

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

      &.button{
        padding: 0.6rem 2rem;
        color: var(--primary);
        background-color: white;
        border: solid;
        border-color: var(--primary);
        
        &:hover{
          background-color: var(--primary);
          color: white;
        }

      }
    }

  }


 
  @media (max-width: 550px){
    flex-direction: column;
    align-items: center;

    .logo{
      margin-bottom: 3rem;
      
    }
    nav{
      flex-direction: column;
      gap: 1rem;
    }
  }
  
`