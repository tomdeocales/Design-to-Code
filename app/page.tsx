import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import PracticeAreas from '@/components/PracticeAreas'
import BoardCertified from '@/components/BoardCertified'
import Partners from '@/components/Partners'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Offices from '@/components/Offices'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Newsletter />
      <PracticeAreas />
      <BoardCertified />
      <Partners />
      <Process />
      <Testimonials />
      <Offices />
      <Footer />
    </main>
  )
}
