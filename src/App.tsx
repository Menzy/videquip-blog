export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold tracking-tight">Videquip Blog</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          React + Vite + TypeScript + Tailwind starter
        </p>
        <div className="mt-6 text-sm opacity-70">
          <ul className="list-disc pl-6 space-y-1">
            <li>Vite 5 build and dev server</li>
            <li>React 18 with StrictMode</li>
            <li>Tailwind 3 configured</li>
            <li>ESLint + Prettier ready</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
