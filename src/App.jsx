import GradientASCII from './components/GradientASCII';
import SwarmCursor from './components/SwarmCursor';
import DecryptedText from './components/DecryptedText';
import HalftoneReveal from './components/HalftoneReveal';
import AccordionGallery from './components/AccordionGallery';
import DriftWall from './components/DriftWall';
import Dock from './components/Dock';

// ---- Edit your content here ----
const ME = { handle: 'nyras', age: 16, role: 'Software engineer', place: 'Panamá' };

const LINKS = {
  instagram: 'https://instagram.com/utmpx',
  github: 'https://github.com/nyrasdev',
  balboita: 'https://balboita.vercel.app',
  email: 'fer@nyras.dev',
};

const STACK = ['Raspberry Pi 5', 'ESP32', 'HuskyLens', 'HX711', 'TensorFlow Lite', 'OpenCV', 'Python', 'SQLite'];

const GALLERY = [
  { image: '/gallery/montaje.webp', label: 'The build', alt: 'BALBOITA frame fully assembled next to its monitor' },
  { image: '/gallery/bill-panda.jpg', label: 'Scanning', alt: 'A banknote placed under the BALBOITA camera' },
  { image: '/gallery/robot-front.webp', label: 'Live demo', alt: 'BALBOITA scanning a banknote with the mascot on its front screen' },
  { image: '/gallery/ui-billete.jpg', label: 'Bill result', alt: 'BALBOITA interface showing the result for a banknote' },
  { image: '/gallery/screen-pound.webp', label: 'Coin result', alt: 'BALBOITA interface showing the result for a coin' },
];

const TOOLS = [
  'python', 'javascript', 'c', 'html-css', 'sql', 'react', 'vite', 'opencv', 'tensorflow-lite',
  'raspberry-pi', 'esp32', 'github', 'claude-code', 'codex', 'vs-code', 'vercel', 'linux',
].map(slug => ({ image: `/stack/${slug}.svg`, title: slug.replace(/-/g, ' ') }));

const PODIUM = [
  { rank: '3rd', event: 'WRO Open Championship Europe', where: 'Zagreb, Croatia', date: 'Oct 2026' },
  { rank: '1st', event: 'WRO Panamá National', where: 'Future Innovators · Senior', date: '2026' },
];

const LOG = [
  { event: 'WRO Regional #2', result: '89.17 / 200' },
  { event: 'WRO Regional #1', result: '104.17 / 200' },
];

const PROJECTS = [
  { kicker: 'B2B SaaS · Beta', title: 'MesaFlow', text: 'Order tracking for micro restaurants and small shops, built to make their accounting faster and easier. In beta, currently being tested by a micro restaurant.' },
];
// --------------------------------

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);
const icons = {
  ig: <Icon d={<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></>} />,
  gh: <Icon d={<path d="M9 19c-4 1.4-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />} />,
  bot: <Icon d={<><rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" /></>} />,
  mail: <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />,
};
const open = url => () => window.open(url, '_blank', 'noopener');

const Section = ({ id, path, children, className = '' }) => (
  <section id={id} className={`sec ${className}`} aria-labelledby={`${id}-h`}>
    <h2 id={`${id}-h`} className="path"><span>~/</span>{path}</h2>
    <div className="sec-body">{children}</div>
  </section>
);

export default function App() {
  const dockItems = [
    { icon: icons.ig, label: 'Instagram', onClick: open(LINKS.instagram) },
    { icon: icons.gh, label: 'GitHub', onClick: open(LINKS.github) },
    { icon: icons.bot, label: 'BALBOITA', onClick: open(LINKS.balboita) },
    { icon: icons.mail, label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <>
      <header className="hero">
        <div className="hero-ascii" aria-hidden="true">
          <GradientASCII colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']} shape="horizon" characters=" =+xX0S8#@" cellSize={18} density={0.8} />
        </div>
        <SwarmCursor count={800} size={2.6} spread={90} swirl={0.6} clickEffect="burst" color="#a5d8ff" accentColor="#7d9bff">
          <div className="hero-grid">
            <div className="hero-top">
              <p className="record">
                <span>ut_user=<b>{ME.handle}</b></span>
                <span>ut_line=<b>pts/0</b></span>
                <span className="live">USER_PROCESS</span>
              </p>
              <nav className="topnav" aria-label="Sections">
                <a href="#work">work</a>
                <a href="#record">record</a>
                <a href="#stack">stack</a>
                <a href="#contact">contact</a>
              </nav>
            </div>

            <div className="hero-bottom">
              <dl className="meta">
                <div><dt>role</dt><dd>{ME.role}</dd></div>
                <div><dt>age</dt><dd>{ME.age}</dd></div>
                <div><dt>host</dt><dd>{ME.place}</dd></div>
                <div><dt>best</dt><dd>3rd · WRO Europe</dd></div>
              </dl>
              <h1 className="wordmark">
                <DecryptedText text={ME.handle} animateOn="view" sequential revealDirection="start" speed={70} characters="01#$%&*<>/\\|_" encryptedClassName="enc" />
              </h1>
            </div>
          </div>
        </SwarmCursor>
      </header>

      <main>
        <Section id="work" path="work">
          <article className="feature">
            <div className="feature-img">
              <HalftoneReveal src="/gallery/robot-front.webp" mode="mono" shape="dot" cellSize={6} angle={45} inkColor="#e6eaf0" paperColor="#0b0d12" revealRadius={160} />
              <span className="hint">hover to develop</span>
            </div>
            <div className="feature-text">
              <p className="kicker">WRO Future Innovators · Senior</p>
              <h3>BALBOITA</h3>
              <p className="lede">A robot that reads coins and bills and turns each one into a short lesson about where it came from.</p>
              <p className="body">
                A Raspberry Pi 5 runs the vision model, an ESP32 handles wireless, and a load cell plus ultrasonic sensor confirm what's been placed and weigh it.
                Built with my team, Los Tres Mosqueteros.
              </p>
              <ul className="chips" aria-label="Stack">{STACK.map(s => <li key={s}>{s}</li>)}</ul>
              <a className="more" href={LINKS.balboita} target="_blank" rel="noreferrer">balboita.vercel.app ↗</a>
            </div>
          </article>

          <div className="gallery">
            <AccordionGallery items={GALLERY} defaultIndex={2} expandRatio={0.52} trigger="hover" />
          </div>

          <div className="side">
            {PROJECTS.map(p => (
              <article className="side-item" key={p.title}>
                <p className="kicker">{p.kicker}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="record" path="record">
          <div className="podium">
            {PODIUM.map(p => (
              <div className="place" key={p.event}>
                <span className="rank">{p.rank}</span>
                <div>
                  <p className="place-event">{p.event}</p>
                  <p className="place-where">{p.where} · {p.date}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="cmd">last {ME.handle} | tail -2</p>
          <ul className="log">
            {LOG.map(r => (
              <li key={r.event}><span>{ME.handle}</span><span>{r.event}</span><span>{r.result}</span></li>
            ))}
          </ul>
        </Section>
      </main>

      <section id="stack" className="stack" aria-labelledby="stack-h">
        <div className="stack-label">
          <h2 id="stack-h" className="path"><span>~/</span>stack</h2>
          <p>Languages, hardware and the tools I ship with.</p>
        </div>
        <DriftWall items={TOOLS} columns={5} tileWidth={200} tileHeight={132} gap={18} tilt={16} turn={-14} perspective={1200} depth={120} speed={42} direction="up" variance={0.45} parallax={0.6} lift={64} fade={0.6} dim={0.55} overlayColor="#0b0d12" />
      </section>

      <main>
        <Section id="contact" path="contact">
          <p className="big-mail"><span className="sel">{LINKS.email}</span></p>
          <p className="muted">or DM <a href={LINKS.instagram} target="_blank" rel="noreferrer">@utmpx</a> on Instagram.</p>
        </Section>
        <footer><span>nyras.dev</span><span>© 2026 {ME.handle}</span></footer>
      </main>

      <nav className="dock-wrap" aria-label="Links">
        <Dock items={dockItems} theme="dark" accentColor="#7d9bff" baseItemSize={46} magnification={64} panelHeight={64} showBadges={false} />
      </nav>
    </>
  );
}
