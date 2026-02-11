import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

//import { Github, Linkedin, Mail } from "lucide-react";

export function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-6'>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='https://github.com/pkstoy13'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
          >
            <div className='h-4 w-4' />
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href='https://www.linkedin.com/in/pksto'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
          >
            <div className='h-4 w-4' />
            LinkedIn
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href='mailto:pkstoyanov1@gmail.com'
            className='flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
          >
            <div className='h-4 w-4' />
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
