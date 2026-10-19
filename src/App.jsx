import Dither from './components/Dither';
import DecryptedText from './components/DecryptedText';
import SpotlightCard from './components/SpotlightCard';
import Dock from './components/Dock';

// ---- Edit your content here ----
const LINKS = {
  instagram: 'https://instagram.com/utmpx',
  github: 'https://github.com/nyrasdev',
  balboita: 'https://balboita.vercel.app',
  email: 'fer@nyras.dev',
};

const STACK = ['Raspberry Pi 5', 'ESP32', 'HuskyLens', 'HX711 load cell', 'TensorFlow Lite', 'OpenCV', 'Python', 'SQLite'];

const SIDE_PROJECTS = [
  {
    kicker: 'Business pitch · 2026',
    title: 'Hydra Smartbottle',
    text: 'Smart hydration bottle for athletes, with an app subscription. Built the product concept and pitched the problem and product.',
  },
  {
    kicker: 'Accounting Investors Challenge · 2026',
    title: 'BASALT',
    text: 'Concept for a mining-safety robot that tracks temperature, ground movement, humidity and toxic gas, with a full financial model behind it.',
  },
];

const LOG = [
  { event: 'WRO Open Championship Europe · Zagreb', result: '3rd place', date: 'Oct 2026', rank: true },
  { event: 'WRO Panamá National', result: '1st place', date: '2026', rank: true },
  { event: 'WRO Regional #2', result: '89.17 / 200', date: '2026' },
  { event: 'WRO Regional #1', result: '104.17 / 200', date: '2026' },
];
// --------------------------------

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);
const icons = {
  ig: <Icon d={<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></>} />,
  gh: <Icon d={<path d="M9 19c-4 1.4-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />} />,
  bot: <Icon d={<><rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6" /></>} />,
  mail: <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />,
};

const open = url => () => window.open(url, '_blank', 'noopener');

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
        <div className="hero-bg" aria-hidden="true">
          <Dither
            waveColor={[0.3, 0.38, 0.85]}
            backgroundColor={[0.03, 0.04, 0.06]}
            colorNum={4}
            pixelSize={2}
            waveSpeed={0.03}
            waveAmplitude={0.3}
            enableMouseInteraction
            mouseRadius={0.4}
          />
        </div>
        <div className="hero-fade" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="record">
            <span>ut_user=<b>fer</b></span>
            <span>ut_host=<b>panamá</b></span>
            <span>ut_line=<b>pts/0</b></span>
            <span className="live">USER_PROCESS</span>
          </p>
          <h1>
            <DecryptedText
              text="Fer González"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={45}
              characters="01#$%&*<>/\\|_"
              encryptedClassName="enc"
            />
          </h1>
          <p className="tag">Student in Panama building robots, embedded systems and the software that runs on them.</p>
        </div>
      </header>

      <main className="wrap content">
        <section aria-labelledby="work">
          <h2 id="work">Projects</h2>

          <SpotlightCard className="feature" theme="dark" spotlightColor="#7d9bff" intensity={0.18}>
            <img className="shot" src="/balboita.webp" alt="BALBOITA scanning a banknote, with its mascot on the front screen and the analysis view on a monitor beside it" width="1600" height="900" loading="lazy" />
            <div className="feature-body">
              <span className="kicker">WRO Future Innovators · Senior · Los Tres Mosqueteros</span>
              <h3>BALBOITA</h3>
              <p>
                A robot that recognizes coins and bills and turns each one into a short lesson about its history and culture. A Raspberry Pi 5 runs the
                vision model, an ESP32 handles wireless, and a load cell plus ultrasonic sensor confirm what's been placed and weigh it.
              </p>
              <ul className="chips" aria-label="Stack">
                {STACK.map(s => <li key={s}>{s}</li>)}
              </ul>
              <a className="more" href={LINKS.balboita} target="_blank" rel="noreferrer">balboita.vercel.app ↗</a>
            </div>
          </SpotlightCard>

          <div className="list">
            {SIDE_PROJECTS.map(p => (
              <article className="item" key={p.title}>
                <span className="kicker muted">{p.kicker}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="ach">
          <h2 id="ach">Achievements</h2>
          <p className="cmd">last fer</p>
          <div className="log">
            <table>
              <thead><tr><th>user</th><th>event</th><th>result</th><th>date</th></tr></thead>
              <tbody>
                {LOG.map(r => (
                  <tr key={r.event}>
                    <td>fer</td>
                    <td>{r.event}</td>
                    <td className={r.rank ? 'rank' : ''}>{r.result}</td>
                    <td>{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="about">
          <h2 id="about">About</h2>
          <p className="prose">
            I study at Colegio Bilingüe de Panamá. Most of what I build sits where hardware meets code: sensors, microcontrollers, a Pi doing computer
            vision, and the web app on top. I also like the business side, turning a build into something people would actually pay for.
          </p>
        </section>

        <section id="contact" aria-labelledby="ct">
          <h2 id="ct">Contact</h2>
          <p className="mono">
            DM <a href={LINKS.instagram} target="_blank" rel="noreferrer">@utmpx</a> · email: <span className="sel">{LINKS.email}</span>
          </p>
        </section>

        <footer><span>nyras.dev</span><span>© 2026 Fer González</span></footer>
      </main>

      <nav className="dock-wrap" aria-label="Links">
        <Dock items={dockItems} theme="dark" accentColor="#7d9bff" baseItemSize={46} magnification={64} panelHeight={64} showBadges={false} />
      </nav>
    </>
  );
}
