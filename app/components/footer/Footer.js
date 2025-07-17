"use client";

// Hooks and Utility
import { useState, useEffect } from "react";

// Components
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-stone-100 text-center">
      <div className="text-xl p-4">
        <Link href="/">
          <span className="">Bull-</span>
          <span className="font-bold text-blue-700">Insight</span>
          <span className="text-stone-900">.com</span>
        </Link>
      </div>

      <div className="">

        <div>
          <p className="text-xs">Find us on:</p>
        </div>

        <div className="flex gap-4 justify-center pb-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="text-xs hover:text-blue-700">
              Facebook
            </h6>
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="text-xs hover:text-blue-700">
              Youtube
            </h6>
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="text-xs hover:text-blue-700">
              Instagram
            </h6>
          </Link>
        </div>

        <div>
          <p className="text-xs">© 2025 Bull-Insight.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
