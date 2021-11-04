import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PhotosContextProvider from './contexts/PhotosContext/Provider';
import DefaultLayout from './layouts/Default';
import HomePage from './pages/Home';
import LikedPhotosPage from './pages/LikedPhotosPage';

import './App.module.scss';

const App = () => (
    <Router>
        <PhotosContextProvider>
            <DefaultLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/liked" element={<LikedPhotosPage />} />
                </Routes>
            </DefaultLayout>
        </PhotosContextProvider>
    </Router>
);

export default App;
