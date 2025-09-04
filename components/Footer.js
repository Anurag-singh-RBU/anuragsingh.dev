"use client"
import * as React from "react"
import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "./components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip"

export default function Footer() {
  return (
    <footer className="relative w-full border-t font-GS mt-10 bg-background dark:bg-neutral-900/50 text-foreground transition-colors duration-300">
      <div className="sm:px-6 max-w-2xl mx-auto py-12">
        
        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:justify-between w-full">
          
          {/* Mobile: Pages + Contact row, lg: separate */}
          <div className="flex flex-row gap-10 w-full">
            
            {/* Pages Section */}
            <div className="text-left">
              <h3 className="mb-4 text-lg text-black/70 font-bungee dark:text-white">Pages</h3>
              <nav className="flex flex-col space-y-4 text-sm font-jetbrains sm:font-semibold font-bold text-gray-600 ml-1 dark:text-teal-300">
                <Link href="/" className="transition-colors">Home</Link>
                <Link href="/coding" className="transition-colors">Coding</Link>
                <Link href="/dashboard" className="transition-colors">Dashboard</Link>
                <Link href="/projects" className="transition-colors">Projects</Link>
                <Link href="https://shadyxui.in/colors" className="transition-colors">Colors</Link>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="sm:text-left sm:ml-10 ml-10">
              <h3 className="mb-4 text-lg text-black/70 font-bungee dark:text-white">Contact &nbsp;Me</h3>
              <address className="flex flex-col space-y-4 text-sm not-italic sm:font-semibold font-bold text-gray-600 dark:text-teal-300 font-mono ml-1">
                
                <a 
                  href="/links" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  Links
                </a>

                <Link href="/resources">
                  Resources
                </Link>

                <p>
                  Phone <span className="dark:text-white">:</span> <span className="sm:font-semibold font-bold text-black dark:text-orange-200">7387857715</span>
                </p>

              </address>
            </div>
          </div>

          {/* Follow Section */}
          <div className="text-left">
            <h3 className="mb-4 text-lg text-black/70 font-bungee ml-1 dark:text-white">Follow &nbsp;Me</h3>
            <div className="flex justify-start space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://github.com/Anurag-singh-RBU" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full p-2 dark:border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          width="18" 
                          height="18">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 
                                0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                                C4.422 18.07 3.633 17.7 3.633 17.7 
                                c-1.087-.744.084-.729.084-.729 
                                1.205.084 1.838 1.236 1.838 1.236 
                                1.07 1.835 2.809 1.305 3.495.998 
                                .108-.776.417-1.305.76-1.605 
                                -2.665-.3-5.466-1.332-5.466-5.93 
                                0-1.31.465-2.38 1.235-3.22 
                                -.135-.303-.54-1.523.105-3.176 
                                0 0 1.005-.322 3.3 1.23 
                                .96-.267 1.98-.399 3-.405 
                                1.02.006 2.04.138 3 .405 
                                2.28-1.552 3.285-1.23 3.285-1.23 
                                .645 1.653.24 2.873.12 3.176 
                                .765.84 1.23 1.91 1.23 3.22 
                                0 4.61-2.805 5.625-5.475 5.92 
                                .42.36.81 1.096.81 2.22 
                                0 1.606-.015 2.896-.015 3.286 
                                0 .315.21.69.825.57 
                                C20.565 22.092 24 17.592 24 12.297 
                                c0-6.627-5.373-12-12-12"/>
                          </svg>
                        <span className="sr-only">Github</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://x.com/anuragRBU" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full p-2 dark:border-white">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full p-2 dark:border-white">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.linkedin.com/in/anuragsinghrbu/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full p-2 dark:border-white">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col sm:items-center sm:justify-between gap-4 border-t pt-8 sm:text-center md:flex-row">
          <p className="text-sm font-GS text-gray-400" style={{wordSpacing: "2px"}}>
            © 2025 Anurag Singh. All rights reserved.
          </p>
          <nav className="flex gap-2 text-sm font-GS dark:text-white">
            <p className="flex flex-row text-gray-400 items-center" style={{wordSpacing: "3px"}}>
              Find me on
              <a href="https://twitter.com" target="__blank" className="dark:text-white">
                <Twitter size={18} className="mx-2 text-black dark:text-blue-400"/>
              </a>and&nbsp;
              <a href="https://www.peerlist.io/manuarora" target="__blank">
                <img src="/peerlist.png" className="h-5 w-5"/>
              </a>
            </p>
          </nav>
        </div>
      </div>
    </footer>
  )
}
