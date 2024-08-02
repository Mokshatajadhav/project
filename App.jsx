import './App.css'

function App() {
  const API_KEY = '0b11f477f8c2da3435366521ec058c72'
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'




  return(
    <>
    <h1 className="text-3xl font-bold underline italic">
      Hello world!
      <p class="text-sky-400/100">The quick brown fox...</p>
<p class="text-sky-400/75">The quick brown fox...</p>
<p class="text-sky-400/50">The quick brown fox...</p>
<p class="text-sky-400/25">The quick brown fox...</p>
<p class="text-sky-400/0">The quick brown fox...</p>
<div class="box-border h-80 w-100 p-4 border-4 ...">
 
</div>
    </h1>
    </>
  );
}

export default App
