import React from 'react';
import SalesChart from './components/SalesChart';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Демонстрация визуализации данных</h1>
            </header>
            <main className="app-main">
                <SalesChart />
            </main>
        </div>
    );
}

export default App;