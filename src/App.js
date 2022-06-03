import React from 'react';
import './style.css';
import Folder from './Components/Folder';
import { explorer } from './Data/FolderData';

export default function App() {
  return <Folder explorer={explorer} />;
}
