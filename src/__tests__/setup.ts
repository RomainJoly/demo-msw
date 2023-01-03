// import { server } from './mocks/server.js'
import '@testing-library/jest-dom';

// Demande au serveur de mocks d’écouter et d’intercepter
// les requêtes décrites dans les handlers.
// beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

// Réinitialise les handlers entre chaque test pour éviter
// d’affecter les autres tests.
// afterEach(() => server.resetHandlers())

// Arrête le serveur quand les tests sont terminés.
// afterAll(() => server.close())