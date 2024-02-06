"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState, useCallback } from "react";
import styles from "./Header.module.css";
import PortalPopup from "../PortalPopup";
import Signup from "../Signup";
import Signin from "../Signin";
import Button from "../Button";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";
import Link from "next/link";
import { SidebarData } from "./SideBarData";
import Cart from "@/app/menu/Cart";
import { signIn, signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [isSignup1Open, setSignup1Open] = useState(false);
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const { data: session } = useSession();

  const openCart = useCallback(() => {
    setCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  const openSignup1 = useCallback(() => {
    setSignup1Open(true);
  }, []);

  const closeSignup1 = useCallback(() => {
    setSignup1Open(false);
  }, []);

  const openSignin = useCallback(() => {
    setSigninOpen(true);
  }, []);

  const closeSignin = useCallback(() => {
    setSigninOpen(false);
  }, []);

  const showSidebar = () => setSidebar(!sidebar);
  const navStyle = [styles.navMenu];

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  if (sidebar) {
    navStyle.push(styles.active);
  }

  return (
    <>
      <header className="header-container">
        <nav className={navStyle.join(" ")}>
          <ul className={styles.navMenuItems} onClick={showSidebar}>
            <li className={styles.navbarToggle}>
              <Fa.FaTimes />
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.navLink}>
                  <Link
                    href={item.path}
                    onClick={() => handleClick(index)}
                    className={
                      activeButton === index ? styles.activeButton : ""
                    }
                  >
                    {item.icon}
                    <span className={styles.navText}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className={styles.buttonContainermb}>
              <Button type="button" version="secondary" onClick={openSignin}>
                Login
              </Button>
              <Button type="button" onClick={openSignup1}>
                Signup
              </Button>
            </div>
          </ul>
        </nav>
        <div className={styles.header}>
          <div className={styles.phoneNumber}>
            <Button width={150}>
              <div className={styles.phone}>
                <img src="./icon-phone.png" alt="" />
                09012345678
              </div>
            </Button>
          </div>
          <div className={styles.logoAndSidebar}>
            <div className={styles.hamBurger}>
              <Fa.FaBars onClick={showSidebar} />
            </div>  
            <div className={styles.logoContainer}>
              <Link href={"/"}>
                <img className={styles.logo} src="/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button type="button" version="outlined" onClick={openSignin}>
              Login
            </Button>
            <Button type="button" onClick={openSignup1}>
              Signup
            </Button>

            {session?.user ? (
              <>
                <p>{session.user.email}</p>
                <button onClick={() => signOut()}> Signout </button>
              </>
            ) : (
              <>
                <button onClick={() => signIn()}> Login </button>
              </>
            )}
          </div>
          <div className={styles.user}>
            <Fa.FaRegUserCircle />
          </div>

          <div className={styles.cart}>
            <div onClick={openCart}>
              <Bs.BsCart4 />
            </div>
            <div className={styles.counter}>2</div>
          </div>
        </div>
      </header>

      {isSignup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignup1}
        >
          <Signup onClose={closeSignup1} />
        </PortalPopup>
      )}
      {isSigninOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignin}
        >
          <Signin onClose={closeSignin} />
        </PortalPopup>
      )}
      {isCartOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCart}
        >
          <Cart onClose={closeCart} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
