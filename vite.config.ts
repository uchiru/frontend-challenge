import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '#': fileURLToPath(new URL('./src', import.meta.url))
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx']
    }
});
