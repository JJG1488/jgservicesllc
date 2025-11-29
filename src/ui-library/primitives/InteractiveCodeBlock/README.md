# InteractiveCodeBlock Component

An expandable code block with macOS-style window buttons, syntax highlighting support, and one-click copy to clipboard. Perfect for documentation, tutorials, and code showcases.

## Features

- 💻 **macOS terminal style** - Beautiful window buttons and design
- 📋 **One-click copy** - Copy code to clipboard with feedback
- 📖 **Expand/collapse** - Smooth animation for long code
- 🎨 **3 themes** - Dark, glass, and light
- 🏷️ **Language badges** - Color-coded by language
- 📝 **Optional description** - Context footer
- ⚡ **Performance optimized** - Smooth animations
- 🎯 **Fully typed** - Complete TypeScript support

## Installation

### Copy to Your Project

1. **Copy the folder:**
   ```bash
   cp -r src/ui-library/primitives/InteractiveCodeBlock /your-project/src/components/
   ```

2. **Install dependencies:**
   ```bash
   pnpm add framer-motion
   ```

3. **Use it:**
   ```tsx
   import InteractiveCodeBlock from '@/components/InteractiveCodeBlock/InteractiveCodeBlock';

   <InteractiveCodeBlock
     title="example.js"
     language="javascript"
     code="console.log('Hello!');"
   />
   ```

## Usage Examples

### Basic Code Block

```tsx
<InteractiveCodeBlock
  title="hello.js"
  language="javascript"
  code={`console.log('Hello, World!');`}
/>
```

### Multi-line Code

```tsx
<InteractiveCodeBlock
  title="component.tsx"
  language="tsx"
  code={`
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
  `.trim()}
/>
```

### With Description

```tsx
<InteractiveCodeBlock
  title="api-route.ts"
  language="typescript"
  code={`
export async function GET(request: Request) {
  const data = await fetchData();
  return Response.json(data);
}
  `.trim()}
  description="Next.js 15 App Router API endpoint with TypeScript"
/>
```

### Initially Expanded

```tsx
<InteractiveCodeBlock
  title="config.json"
  language="json"
  code={JSON.stringify({ theme: 'dark', lang: 'en' }, null, 2)}
  initiallyExpanded
/>
```

### Glass Theme

```tsx
<InteractiveCodeBlock
  title="glassmorphism.tsx"
  language="tsx"
  theme="glass"
  code={`<div className="glass-card p-8">Content</div>`}
/>
```

### Without Window Buttons

```tsx
<InteractiveCodeBlock
  title="minimal.sh"
  language="bash"
  code="npm install framer-motion"
  showWindowButtons={false}
/>
```

### With Callbacks

```tsx
<InteractiveCodeBlock
  title="tracked.js"
  language="javascript"
  code="const x = 42;"
  onCopy={() => console.log('Code copied!')}
  onToggle={(expanded) => console.log('Expanded:', expanded)}
/>
```

### Documentation Example

```tsx
const codeExamples = [
  {
    title: 'Installation',
    code: 'npm install my-package',
    language: 'bash',
  },
  {
    title: 'Basic Usage',
    code: `import { Component } from 'my-package';\n\n<Component />;`,
    language: 'tsx',
  },
];

export default function Docs() {
  return (
    <div className="space-y-6">
      {codeExamples.map((example) => (
        <InteractiveCodeBlock
          key={example.title}
          {...example}
        />
      ))}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **Required** | File/block title |
| `code` | `string` | **Required** | Code content |
| `language` | `string` | **Required** | Programming language |
| `description` | `string` | `undefined` | Footer description |
| `theme` | `'dark' \| 'glass' \| 'light'` | `'dark'` | Color theme |
| `initiallyExpanded` | `boolean` | `false` | Start expanded |
| `showWindowButtons` | `boolean` | `true` | Show macOS buttons |
| `className` | `string` | `''` | Additional classes |
| `disableHover` | `boolean` | `false` | Disable hover lift |
| `onCopy` | `() => void` | `undefined` | Copy callback |
| `onToggle` | `(expanded: boolean) => void` | `undefined` | Toggle callback |

## Themes

| Theme | Background | Use Case |
|-------|------------|----------|
| `dark` | Gray-900 | Default, terminal-like |
| `glass` | Glassmorphism | Match design system |
| `light` | Gray-50 | Light mode sites |

## Supported Languages

Languages with custom badge colors:
- `javascript`, `typescript`, `tsx`, `jsx`
- `python`, `rust`, `go`, `java`
- `css`, `html`, `json`, `yaml`, `bash`
- Any custom language (uses default blue badge)

## Customization

### Changing Defaults

Edit `InteractiveCodeBlock.data.ts`:

```tsx
export const interactiveCodeBlockDefaults = {
  theme: 'glass',              // Change default theme
  language: 'typescript',      // Default language
  initiallyExpanded: true,     // Start expanded
  showWindowButtons: false,    // Hide window buttons
  animation: {
    expandDuration: 0.5,       // Slower animation
    hoverLift: -8,             // Bigger hover lift
    copyFeedbackDuration: 3000, // Longer "copied" message
  },
} as const;
```

### Adding Custom Language Colors

Edit `languageBadgeColors`:

```tsx
export const languageBadgeColors = {
  // ... existing
  php: 'bg-indigo-600',
  ruby: 'bg-red-500',
  swift: 'bg-orange-600',
} as const;
```

### Creating Custom Themes

Add to `codeThemes`:

```tsx
export const codeThemes = {
  // ... existing
  ocean: {
    background: 'bg-gradient-to-br from-blue-900 to-cyan-900',
    headerBg: 'bg-blue-800/50',
    border: 'border-cyan-400/30',
    text: 'text-cyan-100',
    textMuted: 'text-cyan-200',
    hover: 'hover:bg-cyan-700/20',
  },
} as const;
```

## Syntax Highlighting

This component doesn't include syntax highlighting by default. Pair with:

**Option 1: `react-syntax-highlighter`**
```tsx
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

<InteractiveCodeBlock
  title="highlighted.js"
  language="javascript"
  code={code}
>
  <SyntaxHighlighter language="javascript" style={atomOneDark}>
    {code}
  </SyntaxHighlighter>
</InteractiveCodeBlock>
```

**Option 2: `prism-react-renderer`**
```tsx
import { Highlight, themes } from 'prism-react-renderer';

// Wrap code content with Highlight
```

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ⚠️ Clipboard API requires HTTPS (or localhost)

## Accessibility

- ✅ Keyboard navigable buttons
- ✅ ARIA labels on buttons
- ✅ Focus states
- ✅ Screen reader friendly

## Troubleshooting

### Copy not working?

- Requires HTTPS (or localhost for development)
- Check browser console for errors
- Ensure Clipboard API is supported

### Code not formatting correctly?

- Use template literals (backticks) for multi-line code
- Use `.trim()` to remove leading/trailing whitespace
- Consider using `JSON.stringify(obj, null, 2)` for JSON

### Animation choppy?

- Reduce `expandDuration` in config
- Check for conflicting CSS
- Ensure parent container isn't constraining height

## Related Components

- **GlowCard** - Card with glow effect
- **FloatingCard** - Card with scroll animation
- **AnimatedButton** - Button with animations

## License

Free to use. No attribution required.

---

**Version:** 1.0.0
**Last Updated:** 2025-01-28
**Dependencies:** Framer Motion 11.x+
**Framework:** React 18+
