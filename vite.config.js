import { defineConfig } from 'vite';
import VitePugPlugin from 'vite-plugin-pug';
import path from 'path';

export default defineConfig({
    plugins: [VitePugPlugin()],
    base: './',
    server: {
        port: 3000,
    },

    build: {
        outDir: 'build',
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html'),
                signin: path.resolve(__dirname, 'src/pages/signIn/index.html'),
                signup: path.resolve(__dirname, 'src/pages/signUp/index.html'),
                profile: path.resolve(__dirname, 'src/pages/profile/index.html'),
                modal: path.resolve(__dirname, 'src/pages/modal/index.html'),
                chat: path.resolve(__dirname, 'src/pages/chat/index.html'),
                error404: path.resolve(__dirname, 'src/pages/errors/404.html'),
                error500: path.resolve(__dirname, 'src/pages/errors/500.html'),
            },
        },
    },
});


