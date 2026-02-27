"use client"

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
import { LogIn, ShieldCheck } from "lucide-react"

interface AdminLoginDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AdminLoginDialog({ open, onOpenChange }: AdminLoginDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-border/60 bg-card shadow-2xl">
        <DialogHeader className="items-center gap-1">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl text-foreground">
            Admin Login
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Sign in to the DravAI admin panel
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-5 pt-2"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Admin ID */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="adminid" className="text-foreground">
              Admin ID
            </Label>
            <Input
              id="adminid"
              type="text"
              placeholder="Enter your Admin ID"
              className="h-11 rounded-lg border-border bg-muted/40 text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="admin-password" className="text-foreground">
              Password
            </Label>
            <Input
              id="admin-password"
              type="password"
              placeholder="Enter your Password"
              className="h-11 rounded-lg border-border bg-muted/40 text-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            size="lg"
            className="h-11 w-full rounded-lg bg-primary text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Log In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
