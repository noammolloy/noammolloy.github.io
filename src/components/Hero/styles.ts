import styled from "styled-components";

export const Container = styled.section`
  padding: 10rem 5rem;
  display: flex;
  justify-content: center;
  gap: 8rem;
  background: rgba(0,0,0,0);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;

  .hero-text{
    text-align: center;

    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      // color:var(--secondary);
      margin: 2rem auto;
      font-weight: 500;
      font-size: 3rem;
      max-width: 75rem;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }



  .hero-image{
    img{
      max-width: 500px;
      width: 25%;
      border-radius: 50%;
    }
  }



  @media(max-width: 1130px){
    // display: block;
    // margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
  }



  // .icons{
  //   > *{
  //   position: absolute;
  //     opacity: 0.3;
  //     path{
  //       stroke: var(--primary);
  //     }
  //   }

  //   #hex1{
  //     top: 0;
  //     right: 75%;
  //     width: 20%;
  //     height: 20%;
  //   }
  //   #hex2{
  //     top: 2rem;
  //     left: 10rem;
  //     width: 5vw;
  //     height: 5vh;
  //   }
  // }

`