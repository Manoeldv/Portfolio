/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Footer, Navbar } from './components/Layout';
import { About, Contact, Engineering, Hero, Process, Projects, Stack } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-background">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Engineering />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

