"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, User } from "lucide-react"
import { LoginDialog } from "@/components/login-dialog"
import { AdminLoginDialog } from "@/components/admin-login-dialog"

export function HeroSection() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [adminLoginOpen, setAdminLoginOpen] = useState(false)

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
        style={{ backgroundImage: "url('/images/pharma-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-8 text-center">
        {/* AI pulse indicator */}
        <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium text-primary">
            AI-Powered Pharmaceutical Assistant
          </span>
        </div>

        {/* Title */}
        <h1 className="text-balance text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Drav<span className="text-primary">AI</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Your intelligent pharmaceutical companion, designed to streamline
          drug information, patient care, and clinical decision-making.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="gap-2 rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            onClick={() => setAdminLoginOpen(true)}
          >
            <Shield className="h-5 w-5" />
            Login as Admin
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 rounded-full border-secondary bg-secondary/10 px-8 py-6 text-base font-semibold text-secondary shadow-lg transition-all hover:bg-secondary hover:text-secondary-foreground hover:shadow-xl"
            onClick={() => setLoginOpen(true)}
          >
            <User className="h-5 w-5" />
            Login as User / Patient
          </Button>
        </div>
      </div>

      {/* Login Dialogs */}
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <AdminLoginDialog open={adminLoginOpen} onOpenChange={setAdminLoginOpen} />
    </section>
  )
}
