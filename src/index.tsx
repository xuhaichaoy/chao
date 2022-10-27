import React from 'react';
import { createRoot } from 'react-dom/client';

import 'antd/dist/antd.css';
import './index.css';
import 'virtual:windi.css'
import App from './App';

const container = document.getElementById('app')!;

const root = createRoot(container);
root.render( <App />);
