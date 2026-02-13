import Headshot from "../assets/headshot.jpeg";

export function WelcomeSection() {
  return (
    <section className='max-w-3xl mx-auto pt-20 px-4 text-center space-y-4'>
      <img
        src={Headshot}
        alt='Philip Stoyanov'
        className='mx-auto h-80 w-80 rounded-full object-cover shadow-2xl'
      />

      <h1 className='text-4xl font-semibold tracking-tight'>
        Welcome, I’m Phil.
      </h1>
    </section>
  );
}
