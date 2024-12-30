import { Container } from "./styles";

export function Contact(){

  return(
    <Container id="contact">

      <div className="contact-background">
        <div className="column">
          <h2>Connect with me</h2>
        </div>
        <div className="column">
          <p className="text">
          Interested in meeting with me? Feel free to call or send me an email.
          </p>
        </div>
        <div className="column info">
          <p> 
          <svg viewBox="0 0 1691 1407" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M1691,165.177C1691,73.952,1617.048,0,1525.823,0H165.177C73.952,0,0,73.952,0,165.177v1076.646   C0,1333.048,73.952,1407,165.177,1407h1360.646c91.225,0,165.177-73.952,165.177-165.177V165.177z M166.062,132h1361.057   c18.216,0,32.881,14.528,32.881,32.746v1.433L869.916,856.337c-8.417,8.417-18.208,9.675-23.318,9.675   c-5.11,0-14.934-1.258-23.353-9.675L133,166.085v-1.339C133,146.528,147.846,132,166.062,132z M1527.119,1275H166.062   c-18.216,0-33.062-15.084-33.062-33.301V352.961l596.826,596.816c31.198,31.197,72.684,48.376,116.803,48.376   c44.125-0.003,85.528-17.186,116.724-48.382L1560,353.054v888.645C1560,1259.916,1545.335,1275,1527.119,1275z"/></svg>
             noammolloy@gmail.com
          </p>
          <p>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z"/></svg>
            (914) 826-3642
          </p>

          {/* <div className="contacts">
            <div>
            <a href="mailto:noammolloy@gmail.com"><img src={emailIcon} alt="Email" /></a> 
              <a href="mailto:noammolloy@gmail.com">noammolloy@gmail.com</a>
            </div>
            <div>
            <a href="tel:+19148263642"><img src={phoneIcon} alt="Phone No" /></a>
              <a href="tel:+19148263642">(914) 826-3642</a>
            </div>  
          </div> */}

        </div>
      </div>
      
    </Container>
  )
}