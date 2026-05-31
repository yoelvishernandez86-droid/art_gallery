import { defineConfig } from 'vite';
export default defineConfig({base: './',});
import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = dirname(filename);

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname, 'index.html'),
        location: resolve(__dirname, 'location.html')
      }
    }
  }
}); 