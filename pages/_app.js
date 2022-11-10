import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";

export default function MyApp({ Component, pageProps }) {
    const themeActive = {
        
    };
    return (
        <ThemeProvider theme={themeActive}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}