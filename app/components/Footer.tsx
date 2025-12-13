import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-[#A8853B] text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} By IFOUMB Libreville/ 077172820. Tous droits réservés.</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer