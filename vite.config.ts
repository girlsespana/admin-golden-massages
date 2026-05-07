import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      '@': '/src',
      // constants
      '@constants': '/src/constants/index',
      // contexts
      '@contexts': '/src/contexts',
      // Atoms
      '@atoms': '/src/atoms/index',
      // Components
      '@components': '/src/components/index',
      // Hooks
      '@hooks': '/src/hooks/index',
      // Layouts
      '@auth-lay': '/src/layouts/auth',
      '@dash-lay': '/src/layouts/dashboard',
      // Snippets
      '@snippets': '/src/snippets',
      // GraphQL
      '@gql': '/src/gql/index',
      '@types': '/src/gql/graphql',
      // Modules
      '@auth': '/src/modules/auth',
    },
  }
})
