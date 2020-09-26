import React, {useState, useEffect} from 'react';
import './App.css';
import Editor from './comp/Editor';
import useLocalStorage from './hooks/useLocalStorage'

function App() {

    const [html, sethtml] = useLocalStorage('html', '');
    const [js, setjs] = useLocalStorage('js', '');
    const [css, setcss] = useLocalStorage('css', '');
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
      const timeout = setTimeout(() => {
        setSrcDoc(`
        <html>
            <body>${html}</body>        
            <style>${css}</style>        
            <script>${js}</script>        
        </html>
    `)
      }, 300)

      return () => clearTimeout(timeout)

    }, [html, css, js])    


  return (
    <>

    <div className="pane top-pane">
        <Editor 
        language='xml' 
        displayName="HTML"
        value={html} 
        onChange={sethtml}
         />
        <Editor 
        language='css' 
        displayName="CSS"
        value={css} 
        onChange={setcss}
         />
        <Editor 
        language='javascript' 
        displayName="JS"
        value={js} 
        onChange={setjs}
         />
    </div>
    <div className="pane">
      <iframe 
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
      />
    </div>
    <div className="footer"><b>CodePen - Clone</b> Design by <a href="https://www.youtube.com/watch?v=wcVxX7lu2d4">Web Dev Simplified</a> & Development by <a href="https://twitter.com/salmanahmedcse">💻<span>Salman Ahmed</span></a></div>

    </>

  );
}

export default App;