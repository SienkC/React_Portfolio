// import necessary items
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// server on port 3000 using react
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
});