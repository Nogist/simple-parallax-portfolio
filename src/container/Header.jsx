import mouse from '../assets/mouse.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <div>
        <h1>User</h1>
        <h1>Centered</h1>
        <h1>Design</h1>
      </div>
      <div>
        <p>Scroll down</p>
        <Image src={mouse} alt="mouse" />
      </div>
    </div>
  )
}