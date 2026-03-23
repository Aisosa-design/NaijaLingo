import React, { useState } from 'react';
import './App.css';

function App() {
    const [currentScreen, setCurrentScreen] = useState('home');
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [userStats, setUserStats] = useState({ xp: 1250, streak: 7, hearts: 5, gems: 340, level: 12 });

    const languages = [
        { id: 1, name: 'Yoruba', flag: '🇳🇬', progress: 45 },
        { id: 2, name: 'Igbo', flag: '🇳🇬', progress: 30 },
        { id: 3, name: 'Hausa', flag: '🇳🇬', progress: 60 },
        { id: 4, name: 'Bini/Edo', flag: '🇳🇬', progress: 20 },
        { id: 5, name: 'Itsekiri', flag: '🇳🇬', progress: 15 },
        { id: 6, name: 'Esan', flag: '🇳🇬', progress: 10 }
    ];

    const lessons = [
        { id: 1, title: 'Greetings', type: 'reading', completed: true },
        { id: 2, title: 'Numbers 1-10', type: 'writing', completed: true },
        { id: 3, title: 'Basic Phrases', type: 'speaking', completed: false },
        { id: 4, title: 'Family Members', type: 'listening', completed: false }
    ];

    const renderHome = () => (
        <div className="screen home-screen">
            <div className="header">
                <h1>NaijaLingo</h1>
                <p className="tagline">Learn Nigerian languages through play, culture, and inclusion</p>
            </div>
            <div className="stats-bar">
                <div className="stat"><span className="stat-label">Level</span><span className="stat-value">{userStats.level}</span></div>
                <div className="stat"><span className="stat-label">⚡ XP</span><span className="stat-value">{userStats.xp}</span></div>
                <div className="stat"><span className="stat-label">🔥 Streak</span><span className="stat-value">{userStats.streak} days</span></div>
                <div className="stat"><span className="stat-label">❤️ Hearts</span><span className="stat-value">{userStats.hearts}</span></div>
                <div className="stat"><span className="stat-label">💎 Gems</span><span className="stat-value">{userStats.gems}</span></div>
            </div>
        </div>
    );
    return (
        <div className="App">
            {currentScreen === 'home' && renderHome()}
        </div>
    );
}

export default App;