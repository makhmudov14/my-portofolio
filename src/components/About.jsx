import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section class='bg-white py-20' id='about'>
      <div class='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About my-self' />
          <p className='text-slate-600 mt-8 leading-loose'>
          Hello there! 👋 I'm Asadbek Makhmudov, a passionate about Front-end developer based in South Korea, With a blend of creativity and technical expertise, I strive to brush up my coding skills with making some foreiner developers.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;