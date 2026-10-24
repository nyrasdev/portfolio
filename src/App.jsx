import GradientASCII from './components/GradientASCII';
import SwarmCursor from './components/SwarmCursor';
import DecryptedText from './components/DecryptedText';
import DriftWall from './components/DriftWall';
import Dock from './components/Dock';
import Lanyard from './components/Lanyard';
import Topography from './components/Topography';
import LogoLoop from './components/LogoLoop';
import Laptop from './components/Laptop';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { SiPython, SiJavascript, SiCplusplus, SiHtml5, SiCss, SiSqlite, SiReact, SiVite, SiOpencv, SiTensorflow, SiRaspberrypi, SiEspressif, SiArduino, SiGithub, SiClaude, SiVercel, SiLinux, SiGnu, SiNixos, SiDocker, SiGnubash } from 'react-icons/si';

// ---- Edit your content here ----
const ME = { handle: 'fer', age: 16, place: 'Panamá' };

const LINKS = {
  instagram: 'https://instagram.com/nyyras',
  github: 'https://github.com/nyrasdev',
  inapparency: 'https://github.com/nyrasdev/inapparency',
  balboita: 'https://balboita.vercel.app',
  email: 'fer@nyras.dev',
};

const INAP_STACK = ['C++20', 'ESP-IDF', 'CMake', '802.11', 'ESP32 · S3 · C3 · C6'];


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
    balK: 'WRO · 3rd in Europe, 2nd in Panamá', balLede: 'A robot that reads coins and bills and tells the story behind each one. My part was the software.',
    balParts: [
      ['UI / UX', 'Designed the whole interface people see and use.'],
      ['Website', 'Built it end to end, frontend and backend.'],
      ['Robot code', 'Python on a Raspberry Pi 5: the vision model with OpenCV and TensorFlow Lite, plus the sensors.'],
    ],
    balTeam: 'Built with my team, Los Tres Mosqueteros.', balLink: 'balboita.vercel.app ↗',
    inK: 'Open source · v0.1.0', inTag: 'make the inapparent apparent.',
    inLede: 'A headless wireless security monitor for ESP32 boards.',
    inBody: "It listens to 802.11 management traffic, runs it through its own parser and detection rules, and tells you when something looks off and why: deauth floods, evil twins, auth floods and full attack chains. Passive by design, it never transmits. The whole detector fits in about 28 KB.",
    inLink: 'github.com/nyrasdev/inapparency ↗', inHint: 'live OLED, fresh critical alert',
    mesaK: 'B2B SaaS · Beta', mesaT: 'Order tracking for micro restaurants and small shops, built to make their accounting faster and easier. In beta, currently being tested by a micro restaurant.',
    p1: 'WRO Open Championship Europe', p1w: 'Zagreb, Croatia', p1d: 'Oct 2026', p2: 'WRO Panamá National', p2d: '2026', r1: '3rd', r2: '2nd',
    stackP: 'Languages, hardware, the Unix side (GNU, NixOS, Nix, Docker) and the tools I ship with.',
    dm: 'or DM', onIg: 'on Instagram.', contact: 'Contact', lang: 'ES', langLabel: 'Ver en español',
  },
  es: {
    role: 'Ingeniero de software y UI/UX', age: 'edad', roleL: 'rol', host: 'desde', best: 'mejor', bestV: '3.º · WRO Europa',
    balK: 'WRO · 3.º en Europa, 2.º en Panamá', balLede: 'Un robot que lee monedas y billetes y cuenta la historia detrás de cada uno. Mi parte fue el software.',
    balParts: [
      ['UI / UX', 'Diseñé toda la interfaz que la gente ve y usa.'],
      ['Web', 'La hice de principio a fin, frontend y backend.'],
      ['Código del robot', 'Python en una Raspberry Pi 5: el modelo de visión con OpenCV y TensorFlow Lite, y los sensores.'],
    ],
    balTeam: 'Hecho con mi equipo, Los Tres Mosqueteros.', balLink: 'balboita.vercel.app ↗',
    inK: 'Código abierto · v0.1.0', inTag: 'make the inapparent apparent.',
    inLede: 'Un monitor de seguridad inalámbrica headless para placas ESP32.',
    inBody: 'Escucha el tráfico de gestión 802.11, lo pasa por su propio parser y reglas de detección, y te avisa cuando algo no cuadra y por qué: inundaciones de deauth, evil twins, auth floods y cadenas de ataque completas. Es pasivo por diseño: nunca transmite. Todo el detector cabe en unos 28 KB.',
    inLink: 'github.com/nyrasdev/inapparency ↗', inHint: 'OLED en vivo, alerta crítica',
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
    return 'en'; // English by default; Spanish only when the visitor picks it
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch {}
  }, [lang]);
  // smooth scrolling (skipped for people who prefer reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, anchors: true });
    let id;
    const raf = time => { lenis.raf(time); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  const t = T[lang];
  const toggleLang = () => setLang(l => (l === 'en' ? 'es' : 'en'));

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


      <main>
        <Section id="work" path="work">
          <article className="feature bal">
            <Laptop videoSrc="/balboita-ui.mp4" />
            <div className="feature-text">
              <p className="kicker">{t.balK}</p>
              <h3>BALBOITA</h3>
              <p className="lede">{t.balLede}</p>
              <ul className="bal-parts">
                {t.balParts.map(([name, desc]) => (
                  <li key={name}><span className="bal-name">{name}</span><span className="bal-desc">{desc}</span></li>
                ))}
              </ul>
              <p className="bal-team">{t.balTeam}</p>
              <a className="more" href={LINKS.balboita} target="_blank" rel="noreferrer">{t.balLink}</a>
            </div>
          </article>

          <article className="feature inap">
            <div className="inap-media">
              <pre className="inap-log" aria-label="Example inapparency alerts">
{[
  '$ inapparency-replay demo.pcap',
  '[55.250] HIGH     evil-twin     conf=85',
  '[60.190] HIGH     deauth-burst  conf=75',
  '[60.190] CRITICAL attack-chain  conf=95',
  '[70.450] LOW      malformed     conf=30',
  '[80.490] MEDIUM   auth-flood    conf=55',
].map((l, i) => <span key={i} className={l.includes('CRITICAL') ? 'crit' : i === 0 ? 'cmdline' : ''}>{l}{'\n'}</span>)}
              </pre>
              <figure className="inap-oled">
                <img src="/inapparency-oled.png" alt="inapparency OLED screen showing a critical attack-chain alert" width="520" height="264" loading="lazy" />
                <figcaption>{t.inHint}</figcaption>
              </figure>
            </div>
            <div className="feature-text">
              <p className="kicker">{t.inK}</p>
              <h3>inapparency</h3>
              <p className="inap-tag">{t.inTag}</p>
              <p className="lede">{t.inLede}</p>
              <p className="body">{t.inBody}</p>
              <ul className="chips" aria-label="Stack">{INAP_STACK.map(x => <li key={x}>{x}</li>)}</ul>
              <a className="more" href={LINKS.inapparency} target="_blank" rel="noreferrer">{t.inLink}</a>
            </div>
          </article>

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
            <p className="muted">{t.dm} <a href={LINKS.instagram} target="_blank" rel="noreferrer">@nyyras</a> {t.onIg}</p>
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
