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
  }, []);

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
            <div className='recaptcha-position'>
              <Reaptcha sitekey={site_key} onVerify={(res:any) => {
                // console.log("Captcha value: pass", res);
                localStorage.setItem("recaptcha", res);
                Cookies.set('browser', "true")
                setIsVerify(true);
              }} />
            </div>
          </div>
        }
      </Suspense>
    </Router>
  );
}

export default React.memo(App)