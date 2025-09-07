//app/components/Header.tsx

import React from 'react'

function Header() {
  return (
    <div>
      <h1>E-Commerce</h1>
      <nav>
        <ul>
          <li><a href="/auth/login">Login</a></li>
          <li><a href="/auth/register">Register</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
