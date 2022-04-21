import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import TokenSale from './pages/TokenSale';
import { ToastContainer, toast } from 'react-toastify';

import { Vertify } from '@alex_xu/react-slider-vertify';
import PreSale from './pages/PreSale';

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

  useEffect(() => {
    if (!isVerify) return
    toast.success('Verification succeeded 🎉', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [isVerify])

  const isMobile = width <= 768;

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer />
        {
          isVerify ? <div className='bg-cover bg-mobileBackground laptop:bg-background'>
            <Header handler={setHomeUri} />
            <Switch>
              <Route exact path="/">
                <Home uri={homeUri} />
              </Route>
              <Route path="/tokenSale" component={TokenSale} />
              <Route path="/presale" component={PreSale} />
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
                    onFail={() => toast.error('Try again 🤣', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })}
                    onRefresh={() => toast.warn('Refreshing 🤔', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })}
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
                  onFail={() => toast.error('Try again 🤣', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })}
                  onRefresh={() => toast.warn('Refreshing 🤔', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })}
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