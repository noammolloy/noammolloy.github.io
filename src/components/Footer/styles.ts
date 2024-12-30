import styled from "styled-components";


export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 5rem 15rem;
  padding-top: 17rem !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #e2cdfd;
  height: 60rem;


  .logo-image{
    width: 10rem;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;

    a{
      padding: 1.5rem;
      background-color: var(--primary);
      border: solid;
      border-radius: 50%;
      border-color: #e2cdfd;
      transition:  0.25s;
      
      &:hover{
        background-color: #e2cdfd;
        
        path{
          fill: var(--primary);
        }
      }
    
      svg{
        width: 3.5rem;
        vertical-align: middle;
        
        path{
          fill: #e2cdfd;
        }
      }
    }

  }
    
  .react-icon{
    width: 2.6rem;
    stroke: red;
  }


  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
  }
`