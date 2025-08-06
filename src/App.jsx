import {BrowserRouter, Routes} from "react-router-dom";
import Menubar from "./components/Menubar.jsx";
import {Toaster} from "react-hot-toast";
import Dashboard from "./pages/Dashboard.jsx";
import PreviewPage from "./pages/PreviewPage.jsx";
import MainPage from "./pages/MainPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Menubar />
            <Toaster />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/generate" element={<MainPage />} />
                <Route path="/preview" element={<PreviewPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;