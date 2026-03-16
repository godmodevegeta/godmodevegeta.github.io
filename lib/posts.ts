export type Post = {
  slug: string;
  title: string;
  date: string;
  subtitle?: string;
  content: string;
  isPopular?: boolean;
};

export const posts: Post[] = [
  {
    slug: 'the-myth-of-the-10x-developer',
    title: 'The myth of the 10x developer',
    subtitle: 'Why systems matter more than individual brilliance.',
    date: 'Oct 12, 2024',
    isPopular: true,
    content: `For years, the tech industry has been obsessed with the idea of the "10x developer"—the mythical rockstar who can output 10 times more code than their peers.

After managing engineering teams across several high-growth startups, I've come to a different conclusion: 10x developers don't exist in a vacuum. What we often label as individual brilliance is actually the result of **10x environments**.

### The Cost of Heroes
When you rely on heroes, you build a fragile system. A single engineer understanding the entire payments architecture might seem like a superpower, but it's a massive risk. What happens when they go on vacation? Or leave the company?

Instead of looking for 10x individuals, we should focus on building 10x teams by investing in:
- Exceptional tooling
- Clear CI/CD pipelines
- Comprehensive documentation
- A culture of blameless post-mortems

The best engineers I know don't just write more code; they multiply the effectiveness of everyone around them.`
  },
  {
    slug: 'designing-for-the-exhausted-user',
    title: 'Designing for the exhausted user',
    subtitle: 'How cognitive load impacts interface decisions in enterprise software.',
    date: 'Mar 28, 2023',
    isPopular: true,
    content: `Most design portfolios showcase interfaces used by imaginary users who are well-rested, fully caffeinated, and giving the application 100% of their attention.

The reality of enterprise software is very different. Your user is likely exhausted, switching between 14 different tabs, running late for a meeting, and just trying to complete a task so they can go home.

### Lowering Cognitive Load
When we design for the exhausted user, every decision changes:
1. **Defaults matter intensely:** We shouldn't ask users to configure everything upfront. Give them sensible defaults and let them override if needed.
2. **Clear typography over clever layouts:** A simple list is almost always better than a complex grid with hidden hover states.
3. **Forgiving inputs:** If someone types a phone number with hyphens, spaces, or parentheses, just format it for them. Don't throw a validation error.

Good design is about getting out of the user's way.`
  },
  {
    slug: 'farewell-to-rest',
    title: 'Farewell to REST',
    subtitle: 'Moving completely to tRPC and GraphQL in 2022.',
    date: 'Jan 14, 2022',
    isPopular: true,
    content: `I've been building REST APIs for over a decade. It's been the default choice for so long that we rarely stop to question it. But over the last year, I've moved my side projects and new team initiatives completely over to heavily typed alternatives.

### The Problem with REST
The defining issue with REST in modern web development is the disconnect between the client and the server. You are constantly guessing the shape of your data, leading to over-fetching, under-fetching, and the inevitable \`Cannot read properties of undefined\` errors.

### Enter tRPC
Using tRPC for Next.js applications has been a complete paradigm shift. The ability to share types directly between the server and the React client without any code generation step is incredible. It brings the safety of a monolith to a distributed setup.

I don't think I'll be writing another REST endpoint anytime soon.`
  },
  {
    slug: 'reflections-on-a-sabbatical',
    title: 'Reflections on a sabbatical',
    date: 'Feb 10, 2026',
    content: `Taking three months off was terrifying. As someone whose identity was so closely tied to output and productivity, stopping felt like a failure.
    
But stepping away gave me the perspective I desperately needed. I learned to separate my self-worth from my pull requests. I read books that had nothing to do with technology. I learned how to bake sourdough (a cliché, I know).

Most importantly, when I finally returned to the keyboard, I found that my passion for building things had returned. I wasn't just working out of momentum anymore; I was working with intention.`
  },
  {
    slug: 'on-reading-50-books-in-a-year',
    title: 'On reading 50 books in a year',
    date: 'Dec 20, 2025',
    content: `The secret to reading 50 books in a year isn't speed reading. It's consistency and learning to abandon books you don't enjoy.
    
I instituted a rule: if I'm not engaged by page 50, I put the book down. Life is too short to read bad books out of a sense of obligation. Also, dedicating just 30 minutes before bed instead of scrolling through Twitter made all the difference.`
  },
  {
    slug: 'state-management-is-finally-solved',
    title: 'State management is finally solved',
    date: 'Aug 05, 2025',
    content: `After years of Redux boilerplate, Context API performance issues, and the complexities of early React Query, I feel like we've finally reached a plateau of productivity.

With modern tooling like Zustand for global UI state and TanStack Query for server state, the cognitive overhead of state management in React is lower than it has been in a decade.`
  },
  {
    slug: 'a-minimalist-approach-to-life',
    title: 'A minimalist approach to life',
    date: 'Apr 11, 2025',
    content: `Minimalism isn't just about owning fewer physical items. It's about reducing the noise in all aspects of your life.
    
I recently audited my digital life:
- Unsubscribed from 90% of newsletters
- Deleted apps I hadn't opened in a month
- Turned off all non-essential notifications

The resulting mental clarity has been profound.`
  },
  {
    slug: 'scaling-infrastructure-gracefully',
    title: 'Scaling infrastructure gracefully',
    date: 'Nov 30, 2024',
    content: `Scaling isn't just about adding more servers. It's about designing systems that degrade gracefully under pressure. Focus on implementing circuit breakers, generous caching layers, and decoupled asynchronous queues.
    
A system that slows down during a spike is infinitely better than a system that crashes completely.`
  },
  {
    slug: 'why-i-stopped-using-neovim',
    title: 'Why I stopped using Neovim',
    date: 'Jul 18, 2023',
    content: `I spent three years tweaking my dotfiles. My Neovim setup was perfectly tailored to my workflow. But then I switched teams and had to pair program heavily.
    
Explaining my custom keybindings to every new colleague became exhausting. I switched back to VS Code. I'm slightly slower at text manipulation, but much faster at collaboration.`
  },
  {
    slug: 'building-for-the-web-in-2022',
    title: 'Building for the web in 2022',
    date: 'Dec 01, 2022',
    content: `The web ecosystem is maturing. The pendulum is swinging back from heavy client-side SPAs to server-rendered HTML sprinkled with interactivity. It feels like we are finally taking the best parts of the early web and combining them with modern developer ergonomics.`
  },
  {
    slug: 'react-server-components-early-look',
    title: 'React Server Components early look',
    date: 'May 15, 2021',
    content: `React Server Components (RSC) represent a fundamental shift in how we build React applications. By allowing components to render exclusively on the server, we can drastically reduce bundle sizes and directly access server-side resources like databases without building API endpoints. It's going to change everything.`
  },
  {
    slug: 'the-shift-to-edge-computing',
    title: 'The shift to edge computing',
    date: 'Sep 22, 2020',
    content: `Running code as close to the user as possible. Edge functions are bringing latency down to imperceptible levels. The architecture of the future pushes routing, caching, and even lightweight data processing to the edge network.`
  },
  {
    slug: 'my-first-year-in-san-francisco',
    title: 'My first year in San Francisco',
    date: 'Jan 10, 2019',
    content: `Moving to SF was the best decision of my career and the hardest decision of my personal life. The concentration of ambition here is intoxicating, but the cost of living and the monolithic tech culture require deliberate effort to maintain a balanced perspective.`
  }
];
