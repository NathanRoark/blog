import * as React from 'react'
import { ViewVerticalIcon } from '@radix-ui/react-icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Icons } from '@/components/icons'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <ViewVerticalIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
        <span className="pl-2 font-bold">{siteConfig.title}</span>
      </MobileLink>
      <SheetContent side="left" className="pr-0">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
          <Icons.logo strokeWidth="32" fill="currentColor" className="h-6 w-6" />
          <span className="pl-2 font-bold">{siteConfig.title}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link: any) => (
              <MobileLink key={'mobile-link-' + link.title} href={link.href} onOpenChange={setOpen}>
                {link.title}
              </MobileLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  href: string
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  return (
    <a
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </a>
  )
}
