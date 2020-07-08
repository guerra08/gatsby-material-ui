import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Georgia'
        ].join(','),
        h1:{
            fontSize: `3rem`,
            marginTop: 24,
            marginLeft: 4,
            marginRight: 4
        }
    },
});

export default theme;