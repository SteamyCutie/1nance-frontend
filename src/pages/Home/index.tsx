import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import { HomeComponent, IOCComponent, MobileAppComponent, OurCoinComponent, RoadmapComponent, SolutionsComponent, TeamComponent, TokenDistributionComponent, TokenSaleComponent, WhitepaperComponent } from '../../components/DynaComponent'
import Footer from '../../components/Footer'
import { ScrollUpButton } from '../../components/ButtonComponent'

interface HomeProps {
  uri: string
}

const Home: React.FC<HomeProps> = ({ uri }) => {

  const [showButton, setShowButton] = useState(false);
  const [innerUri, setInnerUri] = useState(uri)
  // const [offset, setOffset] = useState(0);

  const location = useLocation();
  const history = useHistory()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // setOffset(window.pageYOffset > 500 ? 500 : window.pageYOffset);
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  useEffect(() => {
    if (innerUri === '' || innerUri === '/') return
    let element: any = document.getElementById(innerUri)
    let topPos = element.offsetTop
    let headerHeight: any = document.getElementById('header')?.offsetHeight
    if (headerHeight === 0) headerHeight = 70
    window.scrollTo({
      top: topPos - headerHeight,
      left: 0,
      behavior: 'smooth'
    })
  }, [innerUri])

  const handleGoSection = (index: string) => {
    if (location.pathname === '/' && index !== '/') {
      setInnerUri(index)
      if (index === '') return
      let element: any = document.getElementById(index)
      let topPos = element.offsetTop
      let headerHeight: any = document.getElementById('header')?.offsetHeight
      if (headerHeight === 0) headerHeight = 70
      window.scrollTo({
        top: topPos - headerHeight,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      history.push(`/${index === '/' ? '' : index}`)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="m-auto">
      <Header handler={handleGoSection} />
      <HomeComponent handler={handleGoSection} />
      <IOCComponent />
      <SolutionsComponent />
      <WhitepaperComponent />
      <TokenSaleComponent />
      <MobileAppComponent />
      <RoadmapComponent />
      <OurCoinComponent />
      <TokenDistributionComponent />
      <TeamComponent />
      <Footer />
      <ScrollUpButton handler={scrollToTop} showButton={showButton} />
    </div>
  )
}

export default Home
