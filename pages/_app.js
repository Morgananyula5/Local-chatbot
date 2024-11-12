import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <header>
        <h1>Local Translator Chatbot</h1>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;