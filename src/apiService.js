import axios from 'axios';

const API_BASE_URL = 'https://66b694cb7f7b1c6d8f19b6db.mockapi.io';

export const fetchMembers = () => axios.get(`${API_BASE_URL}/members`);
export const addMember = (member) => axios.post(`${API_BASE_URL}/members`, member);
export const updateMember = (id, member) => axios.put(`${API_BASE_URL}/members/${id}`, member);
export const deleteMember = (id) => axios.delete(`${API_BASE_URL}/members/${id}`);

export const fetchGames = () => axios.get(`${API_BASE_URL}/games`);
export const addGame = (game) => axios.post(`${API_BASE_URL}/games`, game);
export const updateGame = (id, game) => axios.put(`${API_BASE_URL}/games/${id}`, game);
export const deleteGame = (id) => axios.delete(`${API_BASE_URL}/games/${id}`);