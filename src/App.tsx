import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import TokenSale from './pages/TokenSale';

import { Vertify } from '@alex_xu/react-slider-vertify';

const App: React.FC = () => {
  const [homeUri, setHomeUri] = useState('')
  const [isVerify, setIsVerify] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
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
              !isMobile ? <div className="recaptcha-position bg-[white] w-[420px] h-[310px] mt-[-155px]" style={{ marginLeft: "-210px", borderRadius: "5px" }}>
                <div className='mt-[5px] mb-[5px]'>
                  <p className='text-[red] font-bold text-[25px] text-center'>You have to verify you are human</p>
                  <Vertify
                    width={400}
                    height={200}
                    visible={true}
                    onSuccess={() => {
                      setIsVerify(true);
                    }}
                    onFail={() => alert('Failed, try again')}
                    onRefresh={() => alert('Refresh')}
                  />
                </div>
              </div> : <div className="recaptcha-position bg-[white] w-[320px] h-[260px] mt-[-130px]" style={{ marginLeft: "-160px", borderRadius: "5px" }}>
                <p className='text-[red] font-medium text-[20px] text-center mt-[5px] mb-[5px]'>You have to verify you are human</p>
                <Vertify
                  width={300}
                  height={160}
                  visible={true}
                  onSuccess={() => {
                    setIsVerify(true);
                  }}
                  onFail={() => alert('Failed, try again')}
                  onRefresh={() => alert('Refresh')}
                />
              </div>
            }
          </div>
        }
      </Suspense>
    </Router>
  );
}

export default React.memo(App)