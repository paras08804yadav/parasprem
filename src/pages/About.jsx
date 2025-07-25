export default function About({ content }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>{content.aboutTitle}</h1>
      <p>
        {content.aboutTitle === 'हमारे बारे में' 
          ? 'यह एक उदाहरण वेबसाइट है' 
          : 'This is an example website'}
      </p>
    </div>
  );
}