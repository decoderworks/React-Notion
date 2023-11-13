import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Featured from '@/components/Featured'
import Third from '@/components/Third'
import Footer from '@/components/Footer'
import Fourth from '@/components/Fourth'

export default function Home() {
  return (
        <main>
          <div className=''>
            <Navbar />
            <Featured />
            <Third />
            <Fourth />
            <Footer />
          </div>
        </main>
  )
}
