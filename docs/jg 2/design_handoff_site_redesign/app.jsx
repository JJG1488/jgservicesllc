/* JG Services LLC — app composition + Tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "surface": "glass",
  "heroLayout": "split",
  "accent": ["#2563eb", "#9333ea"],
  "displayFont": "Playfair Display",
  "motion": true
}/*EDITMODE-END*/;

const ACCENTS = [
  ["#2563eb", "#9333ea"], // Sapphire → Amethyst (brand)
  ["#4f46e5", "#06b6d4"], // Indigo → Cyan
  ["#7c3aed", "#db2777"], // Violet → Magenta
  ["#059669", "#2563eb"], // Emerald → Sapphire
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-surface", t.surface);
  }, [t.surface]);

  React.useEffect(() => {
    const root = document.documentElement;
    const [a, b] = t.accent || ACCENTS[0];
    root.style.setProperty("--accent-a", a);
    root.style.setProperty("--accent-b", b);
  }, [t.accent]);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--font-display", `"${t.displayFont}", Georgia, serif`);
  }, [t.displayFont]);

  React.useEffect(() => {
    document.body.classList.toggle("motion-off", !t.motion);
  }, [t.motion]);

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero layout={t.heroLayout} />
        <Marquee />
        <Services />
        <Process />
        <Work />
        <Stats />
        <Why />
        <Testimonial />
        <CTA />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Surfaces" />
        <TweakRadio
          label="Style"
          value={t.surface}
          options={["glass", "solid"]}
          onChange={(v) => setTweak("surface", v)}
        />
        <TweakSection label="Hero" />
        <TweakRadio
          label="Layout"
          value={t.heroLayout}
          options={["split", "spotlight"]}
          onChange={(v) => setTweak("heroLayout", v)}
        />
        <TweakSection label="Brand color" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Type" />
        <TweakRadio
          label="Display font"
          value={t.displayFont}
          options={["Playfair Display", "Sora"]}
          onChange={(v) => setTweak("displayFont", v)}
        />
        <TweakSection label="Motion" />
        <TweakToggle
          label="Animations"
          value={t.motion}
          onChange={(v) => setTweak("motion", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
