"use client";

// Hooks and Utility
import { useState, useEffect } from "react";

// Components
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-background-primary text-center border-t border-border-primary">
      <div className="text-xl p-6">
        <Link href="/">
          <span className="font-body text-2xl">Bull</span>
          <span className="font-bold text-brand-primary text-4xl font-display">Insight</span>
        </Link>
      </div>

      <div className="text-text-muted">

        <div>
          <p className="text-xs">Find us on:</p>
        </div>

        <div className="flex gap-4 justify-center pb-4">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="text-xs text-text-muted hover:text-blue-700">
              Facebook
            </h6>
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="text-xs text-text-muted hover:text-blue-700">
              Youtube
            </h6>
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="text-xs text-text-muted hover:text-blue-700">
              Instagram
            </h6>
          </Link>
        </div>

        <div>
          <p className="text-xs">© 2026 Bull-Insight.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
