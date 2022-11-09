import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";
import { useState } from "react";

export default function HomePage() {
    // const estiloDaHomePage = { backgroundColor: "red" };
    // const valorDoFiltro = "Frost";
    const [valorDoFiltro, setValorDoFiltro] = useState("");

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                {/* <Banner /> */}
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
            </div>
        </>

    )
}


// Header
const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div `
    background-color: blue;
    height: 230px;
    background-image: url(${({bg}) => bg});
    /* background-image: url(${config.bg}); */

`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg}/>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>

        </StyledHeader>
    )
}


// Timeline
function TimeLine({ searchValue, ...props }) {
    const playListNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {playListNames.map((playListName) => {
                const videos = props.playlists[playListName];
                return (
                    <section key={playListName}>
                        <h2>{playListName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormaliezed = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormaliezed)
                            }).map((videos) => {
                                return (
                                    <a key={videos.url} href={videos.url}>
                                        <img src={videos.thumb} />
                                        <span>
                                            {videos.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}