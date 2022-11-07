import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";

export default function HomePage() {
    // const estiloDaHomePage = { backgroundColor: "red" };


    return (
        <>
        <CSSReset/>
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
        </div>
        </>
        
    )
}

// Menu
// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


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
        margin-top: 50px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}

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
function TimeLine(props) {
    const playListNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {playListNames.map((playListName) => {
                const videos = props.playlists[playListName];
                return (
                    <section>
                        <h2>{playListName}</h2>
                        <div>
                            {videos.map((videos) => {
                                return (
                                    <a href={videos.url}>
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