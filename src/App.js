import { DEFAULT, DEFAULT_CONTENTS, NAV } from "./data/default";
import TopBanner from "./pages/TopBanner";
import Header from "./pages/Header";

const App = () => {
    return (
        <>
            <TopBanner DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            <Header DEFAULT={DEFAULT} NAV={NAV} />
        </>
    )
}

export default App;