import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
} = createStitches({

    theme:{

        colors:{
            black:'rgb(20,20,20)',
            white:'rgb(255,255,255)',
            whiteHalfOpacity:'rgba(255,255,255,0.5)',
            gray:'rgb(60,60,60)',
            darkGray:'rgb(20,20,20)'
        },

        space:{
            1:'10px'
        }
    },

    media:{

        desktop:'(min-width:810px)',
        tablet:'(max-width:809px)',
        mobile:'(max-width:480px)'
    }
});