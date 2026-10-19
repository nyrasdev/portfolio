import GradientASCII from './components/GradientASCII';
import SwarmCursor from './components/SwarmCursor';
import DecryptedText from './components/DecryptedText';
import HalftoneReveal from './components/HalftoneReveal';
import AccordionGallery from './components/AccordionGallery';
import DriftWall from './components/DriftWall';
import Dock from './components/Dock';
import Lanyard from './components/Lanyard';
import ScrollExpand from './components/ScrollExpand';
import Topography from './components/Topography';
import LogoLoop from './components/LogoLoop';
import Laptop from './components/Laptop';
import { useEffect, useState } from 'react';
import { SiPython, SiJavascript, SiCplusplus, SiHtml5, SiCss, SiSqlite, SiReact, SiVite, SiOpencv, SiTensorflow, SiRaspberrypi, SiEspressif, SiArduino, SiGithub, SiClaude, SiVercel, SiLinux, SiGnu, SiNixos, SiDocker, SiGnubash } from 'react-icons/si';

// ---- Edit your content here ----
const ME = { handle: 'fer', age: 16, place: 'Panamá' };

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
  'raspberry-pi', 'esp32', 'github', 'claude-code', 'codex', 'vs-code', 'vercel', 'linux', 'gnu', 'unix', 'nixos', 'nix', 'docker', 'bash',
].map(slug => ({ image: `/stack/${slug}.svg`, title: slug.replace(/-/g, ' ') }));


const LOG = [
  { event: 'WRO Regional #2', result: '89.17 / 200' },
  { event: 'WRO Regional #1', result: '104.17 / 200' },
];

const TECH = [
  [SiPython, 'Python', 'https://www.python.org'], [SiJavascript, 'JavaScript', 'https://developer.mozilla.org/docs/Web/JavaScript'],
  [SiCplusplus, 'C++', 'https://isocpp.org'], [SiHtml5, 'HTML', 'https://developer.mozilla.org/docs/Web/HTML'],
  [SiCss, 'CSS', 'https://developer.mozilla.org/docs/Web/CSS'], [SiSqlite, 'SQLite', 'https://sqlite.org'],
  [SiReact, 'React', 'https://react.dev'], [SiVite, 'Vite', 'https://vite.dev'], [SiOpencv, 'OpenCV', 'https://opencv.org'],
  [SiTensorflow, 'TensorFlow Lite', 'https://www.tensorflow.org/lite'], [SiRaspberrypi, 'Raspberry Pi', 'https://www.raspberrypi.com'],
  [SiEspressif, 'ESP32', 'https://www.espressif.com'], [SiArduino, 'Arduino', 'https://www.arduino.cc'],
  [SiGithub, 'GitHub', 'https://github.com/nyrasdev'], [SiClaude, 'Claude Code', 'https://claude.com/claude-code'],
  [SiVercel, 'Vercel', 'https://vercel.com'], [SiLinux, 'Linux', 'https://kernel.org'],
  [SiGnu, 'GNU', 'https://www.gnu.org'], [SiNixos, 'NixOS', 'https://nixos.org'], [SiDocker, 'Docker', 'https://www.docker.com'], [SiGnubash, 'Bash', 'https://www.gnu.org/software/bash/'],
].map(([Icon, title, href]) => ({ node: <Icon />, title, href }));

// ---- Copy in both languages (EN / ES) ----
const T = {
  en: {
    role: 'Software & UI/UX engineer', age: 'age', roleL: 'role', host: 'host', best: 'best', bestV: '3rd · WRO Europe',
    revealH: '3rd in Europe.', revealP: "A coin-reading robot we took from Panamá's regionals to the WRO Open Championship in Zagreb.", scroll: 'scroll',
    swH: 'The other half is code.', swP: 'Every line of it is mine. I built the whole BALBOITA software stack by myself: the UI/UX and design, the frontend, the backend and APIs, and the code running on the robot itself.', swLink: 'open balboita.vercel.app ↗',
    hint: 'hover to develop', kicker: 'WRO Future Innovators · Senior',
    lede: 'A robot that reads coins and bills and turns each one into a short lesson about where it came from.',
    body: "A Raspberry Pi 5 runs the vision model, an ESP32 handles wireless, and a load cell plus ultrasonic sensor confirm what's been placed and weigh it. Built with my team, Los Tres Mosqueteros. On the software side I built everything myself, from the robot's code to the full-stack website.",
    gallery: ['The build', 'Scanning', 'Live demo', 'Bill result', 'Coin result'],
    mesaK: 'B2B SaaS · Beta', mesaT: 'Order tracking for micro restaurants and small shops, built to make their accounting faster and easier. In beta, currently being tested by a micro restaurant.',
    p1: 'WRO Open Championship Europe', p1w: 'Zagreb, Croatia', p1d: 'Oct 2026', p2: 'WRO Panamá National', p2d: '2026', r1: '3rd', r2: '2nd',
    stackP: 'Languages, hardware, the Unix side (GNU, NixOS, Nix, Docker) and the tools I ship with.',
    dm: 'or DM', onIg: 'on Instagram.', contact: 'Contact', lang: 'ES', langLabel: 'Ver en español',
  },
  es: {
    role: 'Ingeniero de software y UI/UX', age: 'edad', roleL: 'rol', host: 'desde', best: 'mejor', bestV: '3.º · WRO Europa',
    revealH: '3.º en Europa.', revealP: 'Un robot que lee monedas y que llevamos desde las regionales de Panamá hasta el WRO Open Championship en Zagreb.', scroll: 'desliza',
    swH: 'La otra mitad es código.', swP: 'Cada línea es mía. Construí yo solo todo el software de BALBOITA: el diseño y la UI/UX, el frontend, el backend y las APIs, y el código que corre en el propio robot.', swLink: 'abrir balboita.vercel.app ↗',
    hint: 'pasa el cursor para revelar', kicker: 'WRO Future Innovators · Senior',
    lede: 'Un robot que lee monedas y billetes y convierte cada uno en una lección corta sobre su origen.',
    body: 'Una Raspberry Pi 5 corre el modelo de visión, un ESP32 maneja la conexión inalámbrica, y una celda de carga con un sensor ultrasónico confirman qué se colocó y lo pesan. Hecho con mi equipo, Los Tres Mosqueteros. Del lado del software lo hice todo yo: desde el código del robot hasta la web full-stack.',
    gallery: ['El armado', 'Escaneando', 'Demo en vivo', 'Resultado billete', 'Resultado moneda'],
    mesaK: 'SaaS B2B · Beta', mesaT: 'Control de pedidos para micro restaurantes y pequeñas tiendas, hecho para que su contabilidad sea más rápida y fácil. En beta, ahora mismo en pruebas con un micro restaurante.',
    p1: 'WRO Open Championship Europe', p1w: 'Zagreb, Croacia', p1d: 'oct 2026', p2: 'WRO Nacional Panamá', p2d: '2026', r1: '3.º', r2: '2.º',
    stackP: 'Lenguajes, hardware, el lado Unix (GNU, NixOS, Nix, Docker) y las herramientas con las que trabajo.',
    dm: 'o escríbeme por', onIg: 'en Instagram.', contact: 'Contacto', lang: 'EN', langLabel: 'View in English',
  },
};
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
  const [lang, setLang] = useState(() => {
    try { const v = localStorage.getItem('lang'); if (v === 'es' || v === 'en') return v; } catch {}
    return typeof navigator !== 'undefined' && navigator.language?.startsWith('es') ? 'es' : 'en';
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch {}
  }, [lang]);
  const t = T[lang];
  const toggleLang = () => setLang(l => (l === 'en' ? 'es' : 'en'));
  const gallery = GALLERY.map((g, i) => ({ ...g, label: t.gallery[i] }));

  const dockItems = [
    { icon: icons.ig, label: 'Instagram', onClick: open(LINKS.instagram) },
    { icon: icons.gh, label: 'GitHub', onClick: open(LINKS.github) },
    { icon: icons.bot, label: 'BALBOITA', onClick: open(LINKS.balboita) },
    { icon: icons.mail, label: t.contact, onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <>
      <header className="hero">
        <div className="hero-ascii" aria-hidden="true">
          <GradientASCII colors={['#5a5a5a', '#ffffff', '#cfcfcf', '#8a8a8a']} shape="horizon" characters=" =+xX0S8#@" cellSize={18} density={0.8} />
        </div>
        <SwarmCursor count={800} size={2.6} spread={90} swirl={0.6} clickEffect="burst" color="#e5e5e5" accentColor="#8a8a8a">
          <div className="hero-grid">
            <div className="hero-top">
              <p className="record">
                <span>ut_user=<b>{ME.handle}</b></span>
                <span>ut_line=<b>pts/0</b></span>
                <span className="live">USER_PROCESS</span>
              </p>
              <button type="button" className="lang-btn" onClick={toggleLang} aria-label={t.langLabel} title={t.langLabel}>
                <span className={lang === 'en' ? 'on' : ''}>EN</span>/<span className={lang === 'es' ? 'on' : ''}>ES</span>
              </button>
              <nav className="topnav" aria-label="Sections">
                <a href="#work">work</a>
                <a href="#record">record</a>
                <a href="#stack">stack</a>
                <a href="#contact">contact</a>
              </nav>
            </div>

            <div className="hero-bottom">
              <dl className="meta">
                <div><dt>{t.roleL}</dt><dd>{t.role}</dd></div>
                <div><dt>{t.age}</dt><dd>{ME.age}</dd></div>
                <div><dt>{t.host}</dt><dd>{ME.place}</dd></div>
                <div><dt>{t.best}</dt><dd>{t.bestV}</dd></div>
              </dl>
              <h1 className="wordmark">
                <DecryptedText text={ME.handle} animateOn="view" sequential revealDirection="start" speed={70} characters="01#$%&*<>/\\|_" encryptedClassName="enc" />
              </h1>
            </div>
          </div>
        </SwarmCursor>
        <div className="hero-badge">
          <Lanyard frontImage="/lanyard/card-front.png" backImage="/lanyard/card-back.png" strapImage="/lanyard/band.png" strapColor="#111111" metal="silver" />
        </div>
      </header>

      <div className="reveal">
        <ScrollExpand src="/gallery/robot-front.webp" alt="BALBOITA scanning a banknote" title="BALBOITA" scrollHint={t.scroll} useWindowScroll>
          <h2>{t.revealH}</h2>
          <p>{t.revealP}</p>
        </ScrollExpand>
      </div>

      <Laptop>
        <p className="path"><span>~/</span>software</p>
        <h2>{t.swH}</h2>
        <p className="muted">{t.swP}</p>
        <a className="laptop-link" href={LINKS.balboita} target="_blank" rel="noreferrer">{t.swLink}</a>
      </Laptop>

      <main>
        <Section id="work" path="work">
          <article className="feature">
            <div className="feature-img">
              <HalftoneReveal src="/gallery/robot-front.webp" mode="mono" shape="dot" cellSize={6} angle={45} inkColor="#f2f2f2" paperColor="#0a0a0a" revealRadius={160} />
              <span className="hint">{t.hint}</span>
            </div>
            <div className="feature-text">
              <p className="kicker">{t.kicker}</p>
              <h3>BALBOITA</h3>
              <p className="lede">{t.lede}</p>
              <p className="body">{t.body}</p>
              <ul className="chips" aria-label="Stack">{STACK.map(s => <li key={s}>{s}</li>)}</ul>
              <a className="more" href={LINKS.balboita} target="_blank" rel="noreferrer">balboita.vercel.app ↗</a>
            </div>
          </article>

          <div className="gallery">
            <AccordionGallery key={lang} items={gallery} defaultIndex={2} expandRatio={0.52} trigger="hover" />
          </div>

          <div className="side">
            <article className="side-item">
              <p className="kicker">{t.mesaK}</p>
              <h3>MesaFlow</h3>
              <p>{t.mesaT}</p>
            </article>
          </div>
        </Section>

        <Section id="record" path="record">
          <div className="podium">
            {[
              { rank: t.r1, event: t.p1, where: t.p1w, date: t.p1d },
              { rank: t.r2, event: t.p2, where: 'Future Innovators · Senior', date: t.p2d },
            ].map(p => (
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
          <p>{t.stackP}</p>
        </div>
        <DriftWall items={TOOLS} columns={5} tileWidth={200} tileHeight={132} gap={18} tilt={16} turn={-14} perspective={1200} depth={120} speed={42} direction="up" variance={0.45} parallax={0.6} lift={64} fade={0.6} dim={0.55} overlayColor="#0a0a0a" />
      </section>

      <div className="logo-band">
        <LogoLoop logos={TECH} speed={80} direction="left" logoHeight={40} gap={64} hoverSpeed={0} scaleOnHover ariaLabel="Languages and tools" />
      </div>

      <main>
        <div className="contact-wrap">
          <div className="contact-topo" aria-hidden="true">
            <Topography color="#d4d4d4" lineCount={22} lineWidth={1.2} elevation={1} foreground={0.2} tilt={32} speed={0.25} direction="forward" glow={0.6} depthOfField={0.4} fog={0.35} hoverEffect="lift" clickEffect="pulse" />
          </div>
          <Section id="contact" path="contact" className="contact-sec">
            <p className="big-mail"><span className="sel">{LINKS.email}</span></p>
            <p className="muted">{t.dm} <a href={LINKS.instagram} target="_blank" rel="noreferrer">@utmpx</a> {t.onIg}</p>
          </Section>
        </div>
        <footer><span>nyras.dev</span><span>© 2026 {ME.handle}</span></footer>
      </main>

      <nav className="dock-wrap" aria-label="Links">
        <Dock items={dockItems} theme="dark" accentColor="#d4d4d4" baseItemSize={46} magnification={64} panelHeight={64} showBadges={false} />
      </nav>
    </>
  );
}
