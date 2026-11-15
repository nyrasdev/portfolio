import { useEffect, useRef } from 'react';

// Button + dialog that lists everything mentioned on the page, grouped.
export default function AllList({ groups, label, title, close, count }) {
  const ref = useRef(null);
  const open = () => ref.current?.showModal();
  const shut = () => ref.current?.close();

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onClick = e => { if (e.target === d) d.close(); };
    d.addEventListener('click', onClick);
    return () => d.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <button type="button" className="all-btn" onClick={open}>{label} <span>{count}</span></button>
      <dialog ref={ref} className="all-dlg" aria-label={title}>
        <div className="all-head">
          <h3>{title}</h3>
          <button type="button" className="all-x" onClick={shut} aria-label={close}>✕</button>
        </div>
        <div className="all-body" data-lenis-prevent>
          {groups.map(g => (
            <section key={g.name}>
              <h4>{g.name}</h4>
              <ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
            </section>
          ))}
        </div>
      </dialog>
    </>
  );
}
