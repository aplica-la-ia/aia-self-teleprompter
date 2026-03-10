import { state } from './state.js';

export function saveToLocal() {
    const dataToSave = {
        scenes: state.scenes,
        cardsData: state.cardsData,
        selectedSpeakers: state.selectedSpeakers,
        lastFileName: state.lastFileName
    };
    localStorage.setItem('prompter_data', JSON.stringify(dataToSave));
}

export function loadFromLocal() {
    const saved = localStorage.getItem('prompter_data');
    if (!saved) return false;
    try {
        const parsed = JSON.parse(saved);
        state.scenes = parsed.scenes || [];
        state.cardsData = parsed.cardsData || [];
        state.selectedSpeakers = parsed.selectedSpeakers || [];
        state.lastFileName = parsed.lastFileName || '';
        return state.scenes.length > 0;
    } catch (e) {
        console.error("Error recuperando persistencia:", e);
        return false;
    }
}
