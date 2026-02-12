import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

//import { Github, Linkedin, Mail } from "lucide-react";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import Gmail from "../assets/gmail.svg";
import Instagram from "../assets/instagram.svg";

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
            <img src={GitHub} alt='GitHub Icon' className='h-4 w-4' />
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
            <img src={LinkedIn} alt='LinkedIn Icon' className='h-4 w-4' />
            LinkedIn
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href='mailto:pkstoyanov1@gmail.com'
            className='flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
          >
            <img src={Gmail} alt='Gmail Icon' className='h-4 w-4' />
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href='https://www.instagram.com/philipstoyanov_/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors'
          >
            <img src={Instagram} alt='Instagram Icon' className='h-4 w-4' />
            Instagram
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
