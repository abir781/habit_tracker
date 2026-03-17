"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useHabit } from "./store";
import { useAuth } from "./store/authstore";

const Navbar = () => {
       const restoreAuth = useAuth((state) => state.restore);

  useEffect(() => {
    restoreAuth();
  }, []);

  const lightzust = useHabit((state) => state.light);
  const darkandlightmakerzust = useHabit((state) => state.darkandlightmaker);

  const userzust = useAuth((state) => state.user);
  const loadingzust = useAuth((state) => state.loading);
  const errorzust = useAuth((state) => state.error);
  const setlogoutzust = useAuth((state) => state.setlogout);
  const setpointzust = useHabit((state)=>state.setpoint);

  const makeinverse = () => {
    darkandlightmakerzust();
  };

  const handlelogout = () => {

    setlogoutzust();
    setlogoutzust(0);
    
  };

  return (
    <div
      className={`top-14 absolute left-1/2 -translate-x-1/2 px-12 py-4 rounded-xl transition-colors duration-300
        ${lightzust ? "bg-[#30BA8F]/75" : "bg-[#30BA8F]/20"}`}
    >
      <div className="font-bold text-white flex gap-22 items-center">
        {/* Logo */}
        <div>
          <Image src="/logoprt11.png" alt="Logo" width={42} height={42} />
        </div>

        {/* Nav Links */}
        <ul className="flex gap-14 justify-center items-center">
          <Link href="/">Home</Link>
          <Link href="/Habits">Habits</Link>
          <Link href="/reminder">Reminder</Link>
          <Link href="/profile">Profile</Link>

          {/* Signup link */}
          {!userzust && <Link href="/signup">Signup</Link>}

          {/* Loading / Login / Logout */}
          {loadingzust ? (
            <span className="text-white px-3 py-1">Loading...</span>
          ) : errorzust || !userzust ? (
            <Link
              href="/login"
              className="bg-white text-[#30BA8F] px-3 py-1 rounded hover:bg-[#ffffffaa] transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handlelogout}
              className="bg-white text-[#30BA8F] px-3 py-1 rounded hover:bg-[#ffffffaa] transition"
            >
              Logout
            </button>
          )}

          {/* Admin-only link */}
          {userzust?.role === "admin" && (
            <Link
              href="/admin/announce"
              className="bg-white text-[#30BA8F] px-3 py-1 rounded hover:bg-[#ffffffaa] transition"
            >
              Announcement
            </Link>
          )}

                {userzust?.role === "pocketowner" && (
            <Link
              href="/godfather/moneyheist"
              className="bg-white text-[#30BA8F] px-3 py-1 rounded hover:bg-[#ffffffaa] transition"
            >
              Bootyshow
            </Link>
          )}


          {/* Theme toggle */}
          {lightzust ? (
            <FaToggleOff
              onClick={makeinverse}
              size={30}
              className="cursor-pointer"
            />
          ) : (
            <FaToggleOn
              onClick={makeinverse}
              size={30}
              className="cursor-pointer"
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;