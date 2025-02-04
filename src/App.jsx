import React, { useState } from 'react'
import './App.css'
import '../src/assets/Wallpapper.png'
import { createGlobalStyle } from 'styled-components'


const App = () => {

  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    background-image: url("https://s3-alpha-sig.figma.com/img/7286/dc09/30c3ba8117e92e87a4ab8d3f28ba2a96?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h1oBt6HV-lOuZOYSdZ4rMWyB2QfVa44Kx6P-xNTFfkcyBo2xmLhOcIUtszExcK9XsbAn8CKlgRrkBCs4Sabr3wMW3sJ9cjuRHE9yCxaBV6VQqceaazqG~1icGdVNCdYyvj0-g1FwBHbYYaOMlHE9wHCP1ffTpr8e~qPwevro3XF4sE9U6s05Qqp3fFW6ELIDmM4EnV4BRlwbpEOE9VWiRLfIyVpoLSE0VsQpx4Xz2g5vyV4jAYfH-TyxWoYZLY8h0-os3Sos94AgPzscMRT3AEO5p1juGsHXpABTbCmV63GeAxFvcVhzjjIn2hmS1BtFiOuva7HgotX9ZFdZswP~Dw__");
    
    background-size: 100%;

    
    
    @media (max-width: 400px) {
      
      background-size: 100%;      
    }
    
  }
    
  `;


  const [lampada, setLampada] = useState(false)

  const trocarLampada = () => {
    setLampada(!lampada);
  };


  return (

    <>

      <main>
        <GlobalStyle />
        <img className='genio' src={lampada ? "https://s3-alpha-sig.figma.com/img/943a/f30d/830703138ee655fe1dfd2466f9911f07?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KA15Umzk0Igsd7kB-ZELVmpRG1abUfqHrnF0EuGWBzO4Z6WU6545y9zJFjE8PP0xwsLQToA0j4EGXxTD9DfrbmjY2ZTDUkyJH-v0gaeMSfOE583xjaFI4mGMcxZHBoD1V0n2H6Er7ixBeXRpxFDdY8t2h1Gxlp6d0jVakjIeehlmr9rtuAMmHWTfDGrjMfhZFFoHPYW9yr0WHUMWP64UNM84BdfLEvYSC-Uvd1kud72mAcY7rPJ9o8ij-HBMLrodzYtTUQIrIqiIv9h2OiGEvbTmUup7m4MMudFjgTM1UXdTWAKgUQuBCN530N1p74Dr~Qk4JzngsvJvlBRiscECpA__" : "https://s3-alpha-sig.figma.com/img/f461/2ef8/f41b0cc05394cd66a0be79c08204684d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L2izwJnSHnCGA3OTT-a5XqsFibGCvSIK8u3woLzLDKF4VQOx3EDHzrvKELlJ0iAf6d4svFSuxz2KcqkNCSOFIT2650LHELCAg6dwBmakdRZDLggxS3aEGmDXjxFti-0lMwIEj-XzMbXvNm0B59ogZLjYtJM8o2CCPeikaMPhCmxJpIHoH5aKbJs77ZegBLIeiyvH00f3o1IXhp23i3vPROYUg-7RHPFdHoulNxrio7hllCYsmoym0nqopQ8hA~MjMnkcy7oVoKn1LdFSFO3m9N7gTGMpkSW8RC-Lk~-BDBqDOz8EipqfZJwCt-NVeDsKUTOcVlrFQ1sG7196xW0cIA__"} alt="Gênio da lâmpada"
          onClick={trocarLampada}
        />

      </main>
    </>
  )
}

export default App