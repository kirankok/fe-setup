import { useTheme } from './ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme:{theme} </p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}