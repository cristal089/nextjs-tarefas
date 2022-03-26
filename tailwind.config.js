module.exports = {
  content: [
    "./pages/*/.{js,ts,jsx,tsx}",
    "./components/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // bg-img-tarefas
      backgroundImage: theme => ({
        'img-tarefas': "url('/images/background.png')"
      })
    },
  },
  plugins: [],
}