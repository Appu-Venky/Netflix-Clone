import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <Facebook size={22} className='icon'></Facebook>
        <Instagram size={22} className='icon'></Instagram>
        <Twitter size={22} className='icon'></Twitter>
        <Youtube size={22} className='icon'></Youtube>

      </div>
      <ul>
        <li>Audio Discription</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Invester Relations</li>
        <li>Jobs</li>
        <li>Terms and Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Corporeate Information</li>
        <li>Contact US</li>
      </ul>
      <p className='copyright-text'>developed by venkatesh    Netflix,Inc.</p>

    </div>
  )
}

export default Footer
