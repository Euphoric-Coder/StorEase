'use client';

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <section
        className="relative hidden w-1/2 lg:flex xl:w-2/5 items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #eef2ff, #e0f7fa, #fce4ec)",
        }}
      >
        {/* Subtle Radial Overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-purple-200 via-blue-100 to-transparent opacity-40"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(193, 223, 255, 0.3), transparent 70%), radial-gradient(circle at bottom right, rgba(233, 211, 255, 0.3), transparent 80%)",
          }}
        ></div>
        <div className="p-2 z-10 flex max-h-[800px] max-w-[450px] flex-col items-center justify-center space-y-12">
          {/* Logo */}
          <Image
            src="/StorEase.png"
            alt="logo"
            width={522}
            height={200}
            className="transition-all duration-500 hover:scale-110 drop-shadow-lg"
          />
          {/* Gradient Text with Typewriter Effect */}
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold bg-clip-text text-transparent leading-snug"
              style={{
                background:
                  "linear-gradient(90deg, #6a11cb, #2575fc, #ff8a00, #ff5757)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Store, Manage, and Share Files Effortlessly",
                    "Secure Your Files with Advanced Encryption",
                    "Experience Seamless File Organization",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>
          </div>
          <p
            className="text-lg font-medium leading-relaxed text-gray-700"
            style={{
              background:
                "linear-gradient(90deg, #6a11cb, #2575fc, #00c9a7, #f5b700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your one-stop solution to securely organize, access, and share files
            anytime, anywhere.
          </p>

          {/* Features Section */}
          <div className="space-y-6 text-center">
            <div className="flex items-center space-x-3">
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #ff8a00, #ff5757, #ff3572)",
                }}
              ></span>
              <p
                className="text-md font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #6a11cb, #2575fc, #00c9a7, #f5b700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Super-fast uploads with no lag
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #00c9a7, #6a11cb, #2575fc)",
                }}
              ></span>
              <p
                className="text-md font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #ff8a00, #2575fc, #f5b700, #6a11cb)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                End-to-end encrypted file storage
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #ff8a00, #ff5757, #6a11cb)",
                }}
              ></span>
              <p
                className="text-md font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #6a11cb, #2575fc, #f5b700, #00c9a7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Real-time file sharing with teams
              </p>
            </div>
          </div>

          {/* File Image */}
          <Image
            src="/files.png"
            alt="File Image"
            width={342}
            height={342}
            className="transition-all duration-500 hover:rotate-2 hover:scale-110 drop-shadow-md hover:shadow-lg"
          />
        </div>
      </section>

      {/* Right Section */}
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <Image
            src="/StorEase.png"
            alt="logo"
            width={522}
            height={200}
            className="h-auto w-[200px] lg:w-[250px] transition-all duration-500 hover:scale-110"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default layout;
