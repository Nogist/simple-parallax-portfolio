import Head from '../components/Head';
import Navbar from '@/components/Navbar';

export default function Layout ({ children }) {
  return (
    <div className="content">
      <Head />
      {/* <Navbar /> */}
      { children }
    </div>
  )
}