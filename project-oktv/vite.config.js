//Main file for set several pages on viteJS enviroment:
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//* We will define the root and outDir variables to store the paths to the source and output directories
const root = resolve(__dirname, './src');
const outDir = resolve(__dirname, './dist');

//* We will use the defineConfig function to export our configuration object
export default defineConfig({
  root,
  plugins: [react()],
  // css:{
  //   preprocessorOptions: {
  //     css: {
  //       additionalData: `
  //       @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        
  //       :root {
  //         --primary-color: #007bff;
  //         --secondary-color: #6c757d;
  //         --font-family: 'Roboto', sans-serif;
  //         --font-size: 16px;
  //       }

  //       * {
  //         font-family: var(--font-family);
  //         font-size: var(--font-size);
  //       }
  //       `
  //     }, 
  //   }
  // },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        createAccount: resolve(root, '/pages/CreateAccountPage', 'index.html'),
        homeDashboard: resolve(root, '/pages/HomeDashboardPage', 'index.html'),
        signIn: resolve(root, '/pages/SignInPage', 'index.html'),
        channelDashboardPage: resolve(root, '/pages/ChannelDashboardPage', 'index.html'),
      }
    }
  },

  server:{
    port: 3000
  },

  

});
