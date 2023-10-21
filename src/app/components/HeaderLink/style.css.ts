import { style } from "@vanilla-extract/css";


const styles={
  li:style({
    display:"inline-block",
    textAlign:"center",
    margin:"10px",
    color:"white",
  }),
  link:style({
    color:"white",
    ':hover':{
      color:"aqua",
      transition:"0.6s",
    }
  })
}

export default styles;