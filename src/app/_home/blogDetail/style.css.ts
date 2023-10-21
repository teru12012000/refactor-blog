import { style } from "@vanilla-extract/css";

const styles={
    aboutPage:style({
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center",
        '@media':{
            'screen and (max-width:352px)':{
                fontSize:15,
            }
        }
    }),
}

export default styles;