"use client";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
  return (
    <button >
      <span className="flex gap-1 items-center">
        <LogOut className="h-4" /> Sign out
      </span>
    </button>
  );
};
