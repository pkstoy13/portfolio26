import Headshot from "../assets/headshot.jpeg";

export function WelcomeSection() {
  return (
    <section className='max-w-3xl mx-auto pt-24 pb-12 px-4 text-center space-y-6'>
      <img
        src={Headshot}
        alt='Philip Stoyanov'
        className='mx-auto h-80 w-80 rounded-full object-cover shadow-sm border-4'
      />

      <h1 className='text-4xl font-semibold tracking-tight'>
        Welcome, I’m Phil.
      </h1>
    </section>
  );
}
