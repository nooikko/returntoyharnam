import { CallToAction, About, FindHunters, GetInvolved, FAQ, Vileblood } from '@sections';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <CallToAction />
      <About />
      <FindHunters />
      <Vileblood />
      <GetInvolved />
      <FAQ />
    </main>
  );
}
