import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn= {firstName:'Adrian',lastName:'JSM',email:'jsmadrian@gmail.com'}
  return (
    <div className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName||'Guest'}
                subtext="Access and manage your account and transactions efficiently">
                </HeaderBox>

                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}>
                </TotalBalanceBox>
            </header>
            Recent transactions
        </div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:123.50},{currentBalance:142.50}]}
            />
    </div>
  )
}

export default Home