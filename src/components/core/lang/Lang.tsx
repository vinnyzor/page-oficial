"use client";


import { Languages } from "lucide-react";

export default function Lang() {


  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4" />
      <button  aria-label="Switch to English">
        🇬🇧
      </button>
      <button  aria-label="Switch to German">
        🇩🇪
      </button>
      <button  aria-label="Switch to French">
        🇫🇷
      </button>
    </div>
  );
}
