"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { LogIn, UserPlus } from "lucide-react"

interface LoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [isSignUp, setIsSignUp] = useState(false)

  const handleToggle = () => setIsSignUp((prev) => !prev)

  return (
    <Dialog open={open} onOpenChange={(value) => { onOpenChange(value); if (!value) setIsSignUp(false) }}>
      <DialogContent className="sm:max-w-md border-border/60 bg-card shadow-2xl">
        <DialogHeader className="items-center gap-1">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {isSignUp ? (
              <UserPlus className="h-6 w-6 text-primary" />
            ) : (
              <LogIn className="h-6 w-6 text-primary" />
            )}
          </div>
          <DialogTitle className="text-xl text-foreground">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isSignUp
              ? "Sign up to get started with DravAI"
              : "Log in to your patient account"}
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-5 pt-2"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Full Name - only visible on Sign Up */}
          {isSignUp && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="fullname" className="text-foreground">
                Full Name
              </Label>
              <Input
                id="fullname"
                type="text"
                placeholder="John Doe"
                className="h-11 rounded-lg border-border bg-muted/40 text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
          )}

          {/* User ID */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="userid" className="text-foreground">
              User ID
            </Label>
            <Input
              id="userid"
              type="text"
              placeholder="Enter your User ID"
              className="h-11 rounded-lg border-border bg-muted/40 text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-foreground">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your Password"
              className="h-11 rounded-lg border-border bg-muted/40 text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Toggle message */}
          {!isSignUp && (
            <p className="text-center text-sm text-muted-foreground">
              {"Don't have an ID? "}
              <button
                type="button"
                onClick={handleToggle}
                className="font-semibold text-primary underline-offset-4 transition-colors hover:underline"
              >
                Sign up
              </button>
            </p>
          )}

          {isSignUp && (
            <p className="text-center text-sm text-muted-foreground">
              {"Already have an account? "}
              <button
                type="button"
                onClick={handleToggle}
                className="font-semibold text-primary underline-offset-4 transition-colors hover:underline"
              >
                Log in
              </button>
            </p>
          )}

          {/* Submit button */}
          <Button
            type="submit"
            size="lg"
            className="h-11 w-full rounded-lg bg-primary text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            {isSignUp ? (
              <>
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Log In
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
