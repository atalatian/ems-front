import {css} from '@emotion/css';


const scrollbar = css`
  scrollbar-width: auto;
  scrollbar-color: #C8C8C8 #1d1d1d;
    ::-webkit-scrollbar{
      width: 10px;
    }
  ::-webkit-scrollbar-track {
    background: #1d1d1d;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #C8C8C8;
    border-radius: 20px;
  }
`

export default scrollbar;