"use client"
export default function Mode (): string | undefined{
let Mode = undefined
Mode = localStorage.getItem("darkMode") === "true" ? "dark" : "light";
return Mode
 }
