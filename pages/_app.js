import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} 
      className='bg-neutral-100'
    />
  );
};

export default App;