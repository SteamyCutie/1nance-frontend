import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import TokenSale from './pages/TokenSale';

import Cookies from 'js-cookie'
import Reaptcha from 'reaptcha';
import { site_key } from "./configs/constant";

const App: React.FC = () => {
  const [homeUri, setHomeUri] = useState('')
  const [isVerify, setIsVerify] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    let recaptcha_value = localStorage.getItem("recaptcha");
    let browser_cookie = Cookies.get('browser');
    if (browser_cookie === "true") {
      if (recaptcha_value !== undefined && recaptcha_value !== null) {
        setIsVerify(true);
      }
    }
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      Cookies.remove('browser');
      localStorage.removeItem("recaptcha");
    });
    window.addEventListener('resize', (ev) => {
      ev.preventDefault();
      setWidth(window.innerWidth);
    });
  }, []);

  const isMobile = width <= 768;

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {
          isVerify ? <div className='bg-cover bg-mobileBackground laptop:bg-background'>
            <Header handler={setHomeUri} />
            <Switch>
              <Route exact path="/">
                <Home uri={homeUri} />
              </Route>
              <Route path="/tokenSale" component={TokenSale} />
            </Switch>
          </div> : <div className='bg-cover tokenSale-background' style={{ position: "absolute", width: "100%", height: "100%" }}>
            {
              !isMobile ? <div className="recaptcha-position bg-[white] w-[460px] h-[240px] mt-[-120px]" style={{ marginLeft: "-230px", borderRadius: "10px" }}>
                <div className='mt-[50px] ml-[68px]'>
                  <p className='text-[red] font-bold text-[21px] mb-[25px]'>You have to verify you are human</p>
                  <Reaptcha className="" sitekey={site_key} onVerify={(res: any) => {
                    localStorage.setItem("recaptcha", res);
                    Cookies.set('browser', "true")
                    setIsVerify(true);
                  }} />
                </div>
              </div> : <div className="recaptcha-position mt-[-60px]">
                  <p className='text-[white] font-medium text-[21px] mb-[30px]'>You have to verify you are human</p>
                  <Reaptcha className="" sitekey={site_key} onVerify={(res: any) => {
                    localStorage.setItem("recaptcha", res);
                    Cookies.set('browser', "true")
                    setIsVerify(true);
                  }} />
              </div>
            }
          </div>
        }
      </Suspense>
    </Router>
  );
}

export default React.memo(App)