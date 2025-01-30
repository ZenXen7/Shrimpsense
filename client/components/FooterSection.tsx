
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";


export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4 border-t border-gray">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
             
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-xl text-blue-900 pt-1 font-extrabold">Product</h3>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Changelog
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Documentation
              </a>
            </FooterColumn>
            <FooterColumn>
            <h3 className="text-xl text-blue-900 pt-1 font-extrabold">Company</h3>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                About
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Careers
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
            <h3 className="text-xl text-blue-900 pt-1 font-extrabold">Contact</h3>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Discord
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Twitter
              </a>
              <a
                href="/"
                className="text-sm text-muted-foreground"
              >
                Github
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 ShrimpSense. All rights reserved</div>
            <div className="flex items-center gap-4">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
